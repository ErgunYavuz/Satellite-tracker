import * as THREE from 'three';
import { Satellite } from './Satellite.js';

export class SatelliteManager {

    selectedSatellite;

    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.satellites = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event), false);
        this.infoDisplay = this.createInfoDisplay();
        document.body.appendChild(this.infoDisplay);
    }

    createInfoDisplay() {
        const infoDisplay = document.createElement('div');
        infoDisplay.style.position = 'absolute';
        infoDisplay.style.top = '10px';
        infoDisplay.style.right = '10px';
        infoDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        infoDisplay.style.color = 'white';
        infoDisplay.style.padding = '10px';
        infoDisplay.style.borderRadius = '5px';
        infoDisplay.style.fontFamily = 'Arial, sans-serif';
        infoDisplay.style.fontSize = '14px';
        infoDisplay.style.display = 'none';
        return infoDisplay;
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

            if(i > 2000) break;
            
        }
        console.log("number of satellites : " + tleData.length);
    }

    updatePositions(date) {
        this.satellites.forEach(satellite => {
            if(this.selectedSatellite && satellite.name === this.selectedSatellite.name){
                satellite.updatePosition(date, true);
            }
            satellite.updatePosition(date);
        });
    }

    onMouseClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
        for (let i = 0; i < intersects.length; i++) {
            if (intersects[i].object.userData.clickable) {
                if (this.selectedSatellite){
                    this.selectedSatellite.untoggle();
                    if(intersects[i].object.userData.satellite.name === this.selectedSatellite.name){
                        this.selectedSatellite = null;
                        break;
                    }
                }
                this.selectedSatellite = intersects[i].object.userData.satellite;
                this.selectedSatellite.toggle();
                this.displaySatelliteInfo(this.selectedSatellite);
                break;
            }
        }
    }


    displaySatelliteInfo(satellite) {
        const infos = satellite.getSatelliteInfo()
        console.log(`
            Satellite Information:
            ----------------------
            Name: ${infos.name}
            Inclination: ${infos.inclination}°
            latitude: ${infos.latitude}°
            longitude: ${infos.longitude}°
            Current Altitude: ${infos.altitude} km
            Current Velocity: ${infos.velocity} km/s
            Orbital Period: ${infos.period} min
        `);
        this.infoDisplay.innerHTML = `
            <h2 style="margin: 0 0 10px 0; font-size: 18px;">${infos.name}</h2>
            <p>Inclination: ${infos.inclination}°</p>
            <p>latitude: ${infos.latitude} °</p>
            <p>longitude: ${infos.longitude} °</p>
            <p>Altitude: ${infos.altitude} km</p>
            <p>Velocity: ${infos.velocity} km/s</p>
            <p>Period: ${infos.period} min</p>
        `;
        this.infoDisplay.style.display = 'block';
    }
}