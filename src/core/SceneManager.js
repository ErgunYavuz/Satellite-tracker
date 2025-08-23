import * as THREE from 'three'
import Stats from 'stats.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Earth } from './Earth'
import { SatelliteManager } from './satellite/SatelliteManager'

export class SceneManager {
    constructor(container, interval = 100, showStats = true) {
        this.container = container
        this.interval = interval

        // three.js core
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1_000_000
        )
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            logarithmicDepthBuffer: true,
        })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.container.appendChild(this.renderer.domElement)
        this.camera.position.z = 20000

        // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.03
        this.controls.screenSpacePanning = false
        this.controls.minDistance = 7000
        this.controls.maxDistance = 100000

        if (showStats) {
            this.stats = new Stats()
            this.stats.showPanel(0)
            document.body.appendChild(this.stats.dom)
        }

        // scene content
        this.earth = new Earth(this.scene)
        this.satelliteManager = new SatelliteManager(
            this.scene,
            this.camera,
            this.renderer
        )

        // timings
        this.clock = new THREE.Clock() // seconds since last frame
        this.accumMs = 0 // accumulator for fixed timestep
        this.elapsedMs = 0 // total simulated ms since start
        this.startDate = new Date() // simulation reference "now"

        window.addEventListener('resize', () => this.onWindowResize(), false)

        this.animate = this.animate.bind(this)
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    animate() {
        requestAnimationFrame(this.animate)

        const dtMs = this.clock.getDelta() * 1000
        this.accumMs += dtMs

        while (this.accumMs >= this.interval) {
            this.elapsedMs += this.interval
            const simDate = new Date(this.startDate.getTime() + this.elapsedMs)

            this.satelliteManager.updatePositions(simDate)
            this.earth.update(this.interval)

            this.accumMs -= this.interval
        }

        this.controls.update()
        this.renderer.render(this.scene, this.camera)
        this.stats.update()
    }
}
