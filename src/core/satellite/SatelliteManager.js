import * as THREE from 'three';
import { Satellite } from './Satellite.js';
import { SatelliteInstancing } from './SatelliteInstancing.js';
import { UIManager } from '../UIManager.js';
import utils from '../../Utils.js';

export class SatelliteManager {
    selectedSatellite;

    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event), false);

        this.satellites = [];
        this.satelliteInstancing = null; 

        this.initiateSatellites();

        this.uiManager = new UIManager(
            (searchTerm) => this.searchSatellite(searchTerm),
            (satellite) => this.selectSatellite(satellite),
            this.satellites
        );
    }

    async initiateSatellites() {
        const tleData = await utils.fetchTLEData();
        const satelliteCount = Math.floor(tleData.length / 3);
        
        this.satelliteInstancing = new SatelliteInstancing(satelliteCount);
        this.scene.add(this.satelliteInstancing.mesh);
        
        for (let i = 0; i < tleData.length; i += 3) {
            const name = tleData[i].trim();
            const line1 = tleData[i + 1];
            const line2 = tleData[i + 2];

            const satellite = new Satellite(name, line1, line2);
            this.satellites.push(satellite);
        }
        
        console.log("number of satellites loaded: " + this.satellites.length);
    }

    updatePositions(date) {
        this.satellites.forEach((satellite, index) => {
            satellite.updatePosition(date);
            
            this.satelliteInstancing.updateInstance(
                index,
                satellite.position,
                satellite.color
            );

            if (this.selectedSatellite && satellite === this.selectedSatellite) {
                this.uiManager.updateDynamicInfo(satellite);
            }
        });
    }

    onMouseClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.satelliteInstancing.mesh);
   
        if (intersects.length > 0) {
            const instanceId = intersects[0].instanceId;
            const satellite = this.satellites[instanceId];
            this.selectSatellite(satellite);
        }
    }

    selectSatellite(satellite) {
        if (this.selectedSatellite) {
            this.selectedSatellite.untoggle(this.scene);
            
            if (satellite.name === this.selectedSatellite.name) {
                this.selectedSatellite = null;
                this.uiManager.initSatelliteInfo(null);
                return;
            }
        }
        this.selectedSatellite = satellite;
        this.selectedSatellite.toggle(this.scene);
        this.uiManager.initSatelliteInfo(satellite);
    }

    searchSatellite(name) {
        const foundSatellite = this.satellites.find(sat => 
            sat.name.toLowerCase().includes(name.toLowerCase())
        );
        if (foundSatellite) {
            this.selectSatellite(foundSatellite);
        } else {
            this.uiManager.showError('Satellite not found');
        }
    }
}