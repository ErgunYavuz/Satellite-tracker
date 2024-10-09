import * as THREE from 'three';
import { Satellite } from './Satellite.js';
import { SatelliteTrajectory } from './SatelliteTrajectory.js';

export class SatelliteManager {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.satellites = [];
        this.trajectories = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.currentVisibleTrajectoryIndex = -1;

        this.renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event), false);
    }

    async fetchTLEData() {
        const response = await fetch('/satellite-data.txt');
        const text = await response.text();
        return text.trim().split('\n');
    }

    async createSatellites() {
        const tleData = await this.fetchTLEData();
        for (let i = 0; i < tleData.length; i += 3) {
            const name = tleData[i].trim();
            const line1 = tleData[i + 1];
            const line2 = tleData[i + 2];

            const satellite = new Satellite(name, line1, line2);
            this.scene.add(satellite.sprite);
            this.satellites.push(satellite);

            const trajectory = new SatelliteTrajectory(satellite.sprite, satellite.satrec);
            this.scene.add(trajectory.line);
            this.trajectories.push(trajectory);

            if(i > 2000) break;
        }
    }

    updatePositions(date) {
        this.visibleSatelliteCount = 0;
        this.satellites.forEach((satellite, index) => {
            satellite.updatePosition(date);
            
            this.trajectories[index].line.visible = satellite.isTrajectoryVisible;
        });
    }

    toggleTrajectory(index) {
        if (this.currentVisibleTrajectoryIndex !== -1) {
            this.satellites[this.currentVisibleTrajectoryIndex].toggleTrajectory(false);
            this.satellites[this.currentVisibleTrajectoryIndex].unhighlight();
        }

        if (index !== this.currentVisibleTrajectoryIndex) {
            this.satellites[index].toggleTrajectory(true);
            this.satellites[index].highlight();
            this.currentVisibleTrajectoryIndex = index;
        } else {
            this.currentVisibleTrajectoryIndex = -1;
        }

        // Force an update of the scene
        this.updatePositions(new Date());
    }

    onMouseClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        for (let i = 0; i < intersects.length; i++) {
            if (intersects[i].object.userData.clickable) {
                const clickedSatellite = intersects[i].object.userData.satellite;
                const index = this.satellites.indexOf(clickedSatellite);
                if (index !== -1) {
                    this.toggleTrajectory(index);
                    break;
                }
            }
        }
    }
}