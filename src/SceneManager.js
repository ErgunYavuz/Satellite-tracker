import * as THREE from 'three';
import Stats from 'stats.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Earth } from './components/Earth';
import { SatelliteManager } from './components/SatelliteManager';

export class SceneManager {
    
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        this.camera.position.z = 20000;

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 10000;
        this.controls.maxDistance = 100000;


        this.initialDate = new Date(); 
        this.earth = new Earth(this.scene);
        this.satelliteManager = new SatelliteManager(this.scene, this.camera, this.renderer);
        this.lastUpdateTime = Date.now();
        //this.scene.add(this.earth.mesh);
        this.satelliteManager.createSatellites();

        window.addEventListener('resize', () => this.onWindowResize(), false);

    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        this.stats.begin();

        requestAnimationFrame(() => this.animate());
        const now = new Date();
        const deltaTime = now - this.lastUpdateTime;
        this.lastUpdateTime = now;
        this.satelliteManager.updatePositions(now);
        this.earth.update(deltaTime);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        
        this.stats.end();
    }
}