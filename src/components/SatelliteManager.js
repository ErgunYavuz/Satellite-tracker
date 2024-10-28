import * as THREE from 'three';
import { Satellite } from './Satellite.js';
import { SatelliteInstancing } from './SatelliteInstancing.js';
import utils from '../Utils.js';

export class SatelliteManager {
    selectedSatellite;

    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event), false);
        this.infoDisplay = this.createInfoDisplay();
        this.searchInput = this.createSearchInput();
        document.body.appendChild(this.infoDisplay);
        document.body.appendChild(this.searchInput);

        this.satellites = [];
        this.satelliteInstancing = null; 

        this.initiateSatellites();
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
        
        console.log("number of satellites: " + this.satellites.length);
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
                this.displaySatelliteInfo(satellite);
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
                document.getElementById('satellite-info').style.display = 'none';
                return;
            }
        }
        this.selectedSatellite = satellite;
        this.selectedSatellite.toggle(this.scene);

        document.getElementById('satellite-name').textContent = satellite.name;
        this.displaySatelliteInfo(this.selectedSatellite);
    }

    displaySatelliteInfo(satellite) {
        const infos = satellite.getSatelliteInfo();
        const infoDisplay = document.getElementById('satellite-info');
        
        //document.getElementById('satellite-name').textContent = infos.name;
        document.getElementById('satellite-inclination').textContent = infos.inclination;
        document.getElementById('satellite-latitude').textContent = infos.latitude;
        document.getElementById('satellite-longitude').textContent = infos.longitude;
        document.getElementById('satellite-altitude').textContent = infos.altitude;
        document.getElementById('satellite-velocity').textContent = infos.velocity;
        document.getElementById('satellite-period').textContent = infos.period;
        
        infoDisplay.style.display = 'block';
    }

    createInfoDisplay() {
        const infoDisplay = document.createElement('div');
        infoDisplay.innerHTML = `
            <div id="satellite-info" style="position: absolute; top: 10px; right: 10px; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 10px; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px; display: none;">
                <h2 id="satellite-name" style="margin: 0 0 10px 0; font-size: 18px;"></h2>
                <p>Inclination: <span id="satellite-inclination"></span>°</p>
                <p>Latitude: <span id="satellite-latitude"></span>°</p>
                <p>Longitude: <span id="satellite-longitude"></span>°</p>
                <p>Altitude: <span id="satellite-altitude"></span> km</p>
                <p>Velocity: <span id="satellite-velocity"></span> km/s</p>
                <p>Period: <span id="satellite-period"></span> min</p>
            </div>
        `;
        return infoDisplay.firstElementChild;
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

    searchSatellite(name) {
        const foundSatellite = this.satellites.find(sat => 
            sat.name.toLowerCase().includes(name.toLowerCase())
        );
        if (foundSatellite) {
            this.selectSatellite(foundSatellite);
        } else {
            alert('Satellite not found');
        }
    }
}