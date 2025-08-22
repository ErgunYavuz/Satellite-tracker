import * as THREE from 'three'
import * as satellite from 'satellite.js'

const DEFAULTCOLOR = new THREE.Color(0xffffff)
//const DEBRISCOLOR = new THREE.Color(0xff0000);
const HIGHLIGHTCOLOR = new THREE.Color(0x00ff00)

export class Object {
	positionAndVelocity
	oribitLine
	groundTrackLine

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
	}

	updatePosition(date) {
		this.date = date
		this.positionAndVelocity = satellite.propagate(this.satrec, this.date)
		if (this.positionAndVelocity.position) {
			const eci = this.positionAndVelocity.position
			this.position.set(eci.x, eci.z, -eci.y)
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
		if (rounding) return periodMin.toFixed(2)
		return periodMin
	}

	getSatelliteInfo() {
		const period = this.getOrbitalPeriod(true)
		const inclination = ((this.satrec.inclo * 180) / Math.PI).toFixed(2)

		const gmst = satellite.gstime(this.date)
		const position = satellite.eciToGeodetic(
			this.positionAndVelocity.position,
			gmst
		)

		const latitude = satellite.degreesLat(position.latitude).toFixed(2)
		const longitude = satellite.degreesLong(position.longitude).toFixed(2)
		const altitude = position.height.toFixed(2)
		const velocity = Math.sqrt(
			this.positionAndVelocity.velocity.x ** 2 +
			this.positionAndVelocity.velocity.y ** 2 +
			this.positionAndVelocity.velocity.z ** 2
		).toFixed(2)
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

		const periodMin = this.getOrbitalPeriod() // precise minutes
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

		for (let i = 0; i <= segments; i++) {
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
		scene.add(this.oribitLine)
		scene.add(this.groundTrackLine)
	}

	untoggle(scene) {
		this.selected = false
		this.color = DEFAULTCOLOR.clone()

		if (this.oribitLine) {
			scene.remove(this.oribitLine)
			this.oribitLine.geometry.dispose()
			this.oribitLine.material.dispose()
		}
		if (this.groundTrackLine) {
			scene.remove(this.groundTrackLine)
			this.groundTrackLine.geometry.dispose()
			this.groundTrackLine.material.dispose()
		}
	}
}
