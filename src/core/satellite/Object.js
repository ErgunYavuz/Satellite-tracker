import * as THREE from 'three'
import * as satellite from 'satellite.js'

const DEFAULTCOLOR = new THREE.Color(0xffffff)
const HIGHLIGHTCOLOR = new THREE.Color(0x00ff00)

// Earth gravitational parameter (km^3/s^2)
const MU_EARTH = 398600.4418

export class Object {
    constructor(name, tle1, tle2) {
        this.name = name
        this.satrec = satellite.twoline2satrec(tle1, tle2)

        this.color = DEFAULTCOLOR.clone()
        this.selected = false
        this.position = new THREE.Vector3()

        const groundTrackGeometry = new THREE.BufferGeometry()
        const groundTrackMaterial = new THREE.LineBasicMaterial({
            color: HIGHLIGHTCOLOR,
        })
        this.groundTrackLine = new THREE.Line(
            groundTrackGeometry,
            groundTrackMaterial
        )

        this.propagationIntervalMs = 1000
        this.lastPropagation = null // { date, r:{x,y,z}, v:{x,y,z} }
        this.propagationTimer = 0
    }

    sgp4At(date) {
        const pv = satellite.propagate(this.satrec, date)
        if (!pv.position || !pv.velocity) return null
        return { date, r: pv.position, v: pv.velocity }
    }

    computeQuadratic(date) {
        if (!this.lastPropagation) return null

        let dt = (date.getTime() - this.lastPropagation.date.getTime()) / 1000

        const r0 = this.lastPropagation.r // km
        const v0 = this.lastPropagation.v // km/s

        // Constant-accel (2-body) quadratic: r = r0 + v0*dt + 0.5*a0*dt^2
        const rmag = Math.hypot(r0.x, r0.y, r0.z)
        const f = -MU_EARTH / (rmag * rmag * rmag) // km/s^2 per km vector
        const ax = f * r0.x,
            ay = f * r0.y,
            az = f * r0.z
        const dt2 = 0.5 * dt * dt

        return {
            x: r0.x + v0.x * dt + ax * dt2,
            y: r0.y + v0.y * dt + ay * dt2,
            z: r0.z + v0.z * dt + az * dt2,
        }
    }

    updatePosition(date) {
        this.date = date
        const t = date.getTime()
        if (
            !this.lastPropagation ||
            t - this.propagationTimer >= this.propagationIntervalMs
        ) {
            const truth = this.sgp4At(date)
            if (truth) {
                this.lastPropagation = truth
                this.propagationTimer = t
            }
        }
        const pred = this.computeQuadratic(date)
        if (pred) {
            this.position.set(pred.x, pred.z, -pred.y)
        } else {
            const pv = this.sgp4At(date)
            if (pv) {
                this.lastPropagation = pv
                this.propagationTimer = date.getTime()
                this.position.set(pv.r.x, pv.r.z, -pv.r.y)
            }
        }

        if (this.selected) {
            this.groundTrackLine.geometry.setFromPoints([
                new THREE.Vector3(0, 0, 0),
                this.position,
            ])
            this.groundTrackLine.geometry.attributes.position.needsUpdate = true
        }
    }

    getOrbitalPeriod(rounding = false) {
        const revPerMin = this.satrec.no / (2 * Math.PI)
        const periodMin = 1 / revPerMin
        return rounding ? Number(periodMin.toFixed(2)) : periodMin
    }

    getSatelliteInfo() {
        const period = this.getOrbitalPeriod(true)
        const inclination = ((this.satrec.inclo * 180) / Math.PI).toFixed(2)

        const gmst = satellite.gstime(this.date || new Date())
        const position = this.lastPropagation
            ? satellite.eciToGeodetic(this.lastPropagation.r, gmst)
            : null

        const latitude = position
            ? satellite.degreesLat(position.latitude).toFixed(5)
            : '—'
        const longitude = position
            ? satellite.degreesLong(position.longitude).toFixed(5)
            : '—'
        const altitude = position ? position.height.toFixed(2) : '—'
        const velocity = this.lastPropagation
            ? Math.hypot(
                  this.lastPropagation.v.x,
                  this.lastPropagation.v.y,
                  this.lastPropagation.v.z
              ).toFixed(2)
            : '—'

        return {
            name: this.name,
            inclination,
            latitude,
            longitude,
            altitude,
            velocity,
            period,
        }
    }

    getProjectedPath(segments = 720) {
        if (!this.date) this.date = new Date()

        const periodMin = this.getOrbitalPeriod()
        const msPerSeg = (periodMin * 60000) / segments // milliseconds per step

        const requiredLen = (segments + 1) * 3

        let geom, posAttr
        if (!this.oribitLine) {
            geom = new THREE.BufferGeometry()
            posAttr = new THREE.BufferAttribute(
                new Float32Array(requiredLen),
                3
            )
            posAttr.setUsage(THREE.DynamicDrawUsage)
            geom.setAttribute('position', posAttr)

            const mat = new THREE.LineBasicMaterial({ color: HIGHLIGHTCOLOR })
            this.oribitLine = new THREE.Line(geom, mat)
        } else {
            geom = this.oribitLine.geometry
            posAttr = geom.getAttribute('position')

            if (!posAttr || posAttr.array.length !== requiredLen) {
                posAttr = new THREE.BufferAttribute(
                    new Float32Array(requiredLen),
                    3
                )
                posAttr.setUsage(THREE.DynamicDrawUsage)
                geom.setAttribute('position', posAttr)
            }
        }
        const arr = posAttr.array

        for (let i = 0; i <= segments + 1; i++) {
            const t = new Date(this.date.getTime() + i * msPerSeg)
            const pv = satellite.propagate(this.satrec, t)
            const off = i * 3
            pv.position
            const eci = pv.position
            arr[off + 0] = eci.x
            arr[off + 1] = eci.z
            arr[off + 2] = -eci.y
        }
        posAttr.needsUpdate = true
        geom.computeBoundingSphere()
    }

    dispose() {
        if (this.oribitLine) {
            this.oribitLine.geometry.dispose()
            this.oribitLine.material.dispose()
        }
        if (this.groundTrackLine) {
            this.groundTrackLine.geometry.dispose()
            this.groundTrackLine.material.dispose()
        }
    }

    toggle(scene) {
        this.selected = true
        this.color.copy(HIGHLIGHTCOLOR)
        this.getProjectedPath()
        if (this.oribitLine) scene.add(this.oribitLine)
        scene.add(this.groundTrackLine)
    }

    untoggle(scene) {
        this.selected = false
        this.color = DEFAULTCOLOR.clone()

        if (this.oribitLine) {
            scene.remove(this.oribitLine)
            this.oribitLine.geometry.dispose()
            this.oribitLine.material.dispose()
            this.oribitLine = undefined
        }
        if (this.groundTrackLine) {
            scene.remove(this.groundTrackLine)
            this.groundTrackLine.geometry.dispose()
            this.groundTrackLine.material.dispose()
        }
    }
}
