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
        this.searchInput = this.createSearchInput();
        document.body.appendChild(this.infoDisplay);
        document.body.appendChild(this.searchInput);
    }

    async fetchTLEData() {
        const response = await fetch('/Satellite-tracker/public/satellite-data.txt');
        const text = await response.text();
        return text.trim().split('\n');
    }

    async createSatellites() {
        const tleData = await this.fetchTLEData();
        for (let i = 0; i < tleData.length; i += 3) {
            console.log(tleData);
            const name = tleData[i].trim();
            const line1 = tleData[i + 1];
            const line2 = tleData[i + 2];

            const satellite = new Satellite(name, line1, line2);
            this.scene.add(satellite.sprite);
            this.satellites.push(satellite);

            if(i > 2000) break;
        }
        console.log("number of satellites : " + this.satellites.length);
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
                this.selectSatellite(intersects[i].object.userData.satellite);
                break;
            }
        }
    }

    selectSatellite(satellite) {
        if (this.selectedSatellite) {
            this.selectedSatellite.untoggle();
            if (satellite.name === this.selectedSatellite.name) {
                this.selectedSatellite = null;
                this.infoDisplay.style.display = 'none';
                return;
            }
        }
        this.selectedSatellite = satellite;
        this.selectedSatellite.toggle();
        this.displaySatelliteInfo(this.selectedSatellite);
        this.focusOnSatellite(satellite);
    }

    displaySatelliteInfo(satellite) {
        const infos = satellite.getSatelliteInfo();
        this.infoDisplay.innerHTML = `
            <h2 style="margin: 0 0 10px 0; font-size: 18px;">${infos.name}</h2>
            <p>Inclination: ${infos.inclination}°</p>
            <p>Latitude: ${infos.latitude}°</p>
            <p>Longitude: ${infos.longitude}°</p>
            <p>Altitude: ${infos.altitude} km</p>
            <p>Velocity: ${infos.velocity} km/s</p>
            <p>Period: ${infos.period} min</p>
        `;
        this.infoDisplay.style.display = 'block';
    }

    searchSatellite(name) {
        const foundSatellite = this.satellites.find(sat => sat.name.toLowerCase().includes(name.toLowerCase()));
        if (foundSatellite) {
            this.selectSatellite(foundSatellite);
            this.focusOnSatellite(foundSatellite);
        } else {
            alert('Satellite not found');
        }
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

    createSearchInput() {
        const searchContainer = document.createElement('div');
        searchContainer.style.position = 'absolute';
        searchContainer.style.top = '10px';
        searchContainer.style.left = '100px';
        searchContainer.style.zIndex = '1000';

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search satellite...';
        searchInput.style.padding = '5px';
        searchInput.style.width = '200px';

        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        searchButton.style.marginLeft = '5px';
        searchButton.style.padding = '5px 10px';

        searchButton.addEventListener('click', () => this.searchSatellite(searchInput.value));
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.searchSatellite(searchInput.value);
            }
        });

        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchButton);

        return searchContainer;
    }

    focusOnSatellite(satellite) {
        const offset = new THREE.Vector3(0, 0, 1000);
        const targetPosition = satellite.sprite.position.clone().add(offset);
        this.camera.position.copy(targetPosition);
        this.camera.lookAt(satellite.sprite.position);
    }
}