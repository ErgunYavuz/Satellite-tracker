import * as THREE from 'three'
import { Object } from '@/core/satellite/Object.js'
import { SatelliteInstancing } from '@/core/satellite/SatelliteInstancing.js'
import utils from '@/core/Utils.js'
import { useSatelliteStore } from '@/stores/satelliteStore.js'

export class SatelliteManager {
    selectedSatellite

    constructor(scene, camera, renderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.store = useSatelliteStore()

        this.raycaster = new THREE.Raycaster()
        this.raycaster.params.Points = { threshold: 24 }
        this.mouse = new THREE.Vector2()

        this.renderer.domElement.addEventListener(
            'mousedown',
            (event) => this.onMouseDown(event),
            false
        )
        this.renderer.domElement.addEventListener(
            'mouseup',
            (event) => this.onMouseUp(event),
            false
        )

        this.objects = []
        this.satelliteInstancing = null

        this.initiateObjects()

        this.store.$subscribe((mutation, state) => {
            if (
                mutation.type === 'requestSearch' ||
                (mutation.events &&
                    Array.isArray(mutation.events) &&
                    mutation.events.some(
                        (event) => event.key === 'searchNonce'
                    )) ||
                this._lastSearchNonce !== state.searchNonce
            ) {
                this._lastSearchNonce = state.searchNonce
                if (state.searchTerm) {
                    this.searchSatellite(state.searchTerm)
                }
            }
        })

        this._lastSearchNonce = this.store.searchNonce
    }

    async initiateObjects() {
        const tleData = await utils.fetchTLEData()
        // const debrisData = await utils.fetchDebrisData();
        // const satelliteCount = Math.floor((tleData.length + debrisData.length) / 3);

        const satelliteCount = Math.floor(tleData.length / 3)
        this.satelliteInstancing = new SatelliteInstancing(satelliteCount, {
            size: 100,
            opacity: 0.9,
            sizeAttenuation: true, // perspective scaling
        })
        this.scene.add(this.satelliteInstancing.mesh)

        for (let i = 0; i < tleData.length; i += 3) {
            const name = tleData[i].trim()
            const line1 = tleData[i + 1]
            const line2 = tleData[i + 2]
            const satellite = new Object(name, line1, line2)
            this.objects.push(satellite)
        }

        this.store.setNames(this.objects.map((o) => o.name))

        console.log('number of objects loaded: ' + this.objects.length)
    }

    updatePositions(date) {
        this.objects.forEach((satellite, index) => {
            satellite.updatePosition(date)

            this.satelliteInstancing.updateInstance(
                index,
                satellite.position,
                satellite.color
            )

            if (
                this.selectedSatellite &&
                satellite === this.selectedSatellite
            ) {
                this.store.updateSelected(satellite.getSatelliteInfo())
            }
        })

        this.satelliteInstancing.commit()
    }

    getSatelliteUnderMouse(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        this.raycaster.setFromCamera(this.mouse, this.camera)

        const intersects = this.raycaster.intersectObject(
            this.satelliteInstancing.mesh,
            false
        )
        if (intersects.length > 0) {
            const pointIndex = intersects[0].index
            return this.objects[pointIndex]
        }
        return null
    }

    onMouseDown(event) {
        this.mouseDownSatellite = this.getSatelliteUnderMouse(event)
    }

    onMouseUp(event) {
        const mouseUpSatellite = this.getSatelliteUnderMouse(event)
        if (
            this.mouseDownSatellite &&
            mouseUpSatellite &&
            mouseUpSatellite.name === this.mouseDownSatellite.name
        ) {
            this.selectSatellite(mouseUpSatellite)
        }
        this.mouseDownSatellite = null
    }

    selectSatellite(satellite) {
        if (this.selectedSatellite) {
            this.selectedSatellite.untoggle(this.scene)

            if (satellite.name === this.selectedSatellite.name) {
                this.selectedSatellite = null
                this.store.setSelected(null)
                return
            }
        }
        this.selectedSatellite = satellite
        this.selectedSatellite.toggle(this.scene)
        this.store.setSelected(satellite.getSatelliteInfo())
    }

    searchSatellite(name) {
        const foundSatellite = this.objects.find((sat) =>
            sat.name.toLowerCase().includes(name.toLowerCase())
        )
        if (foundSatellite) {
            this.selectSatellite(foundSatellite)
        } else {
            this.store.showToast({ type: 'error', message: 'Object not found' })
        }
    }
}
