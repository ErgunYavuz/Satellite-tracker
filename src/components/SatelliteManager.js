import * as THREE from 'three';
import * as sat from 'satellite.js';
import { Satellite } from './Satellite.js';
import { SatelliteTrajectory } from './SatelliteTrajectory.js';

export class SatelliteManager {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.satellites = [];
        this.trajectories = new Map(); // Changed to a Map for efficient lookup
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.currentVisibleTrajectoryIndex = -1;

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

            // const trajectory = new SatelliteTrajectory(satellite.sprite, satellite.satrec);
            // this.scene.add(trajectory.line);
            // this.trajectories.push(trajectory);

            //if(i > 5000) break;
            
        }
        console.log("number of satellites : " + tleData.length);
    }

    updatePositions(date) {
        this.satellites.forEach((satellite, index) => {
            satellite.updatePosition(date);
            
            const trajectory = this.trajectories.get(index);
            if (trajectory) {
                trajectory.line.visible = satellite.isTrajectoryVisible;
            }
        });
    }

    toggleTrajectory(index) {
        if (this.currentVisibleTrajectoryIndex !== -1) {
            this.satellites[this.currentVisibleTrajectoryIndex].toggleTrajectory(false);
            this.satellites[this.currentVisibleTrajectoryIndex].unhighlight();
            const prevTrajectory = this.trajectories.get(this.currentVisibleTrajectoryIndex);
            if (prevTrajectory) {
                prevTrajectory.hide();
            }
        }

        if (index !== this.currentVisibleTrajectoryIndex) {
            this.satellites[index].toggleTrajectory(true);
            this.satellites[index].highlight();
            
            let trajectory = this.trajectories.get(index);
            if (!trajectory) {
                trajectory = new SatelliteTrajectory(this.satellites[index].sprite, this.satellites[index].satrec);
                this.scene.add(trajectory.line);
                this.trajectories.set(index, trajectory);
            }
            trajectory.show();
            
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
                this.displaySatelliteInfo(this.satellites[index]);
                if (index !== -1) {
                    this.toggleTrajectory(index);
                    break;
                }
            }
        }
    }

    displaySatelliteInfo(satellite) {
        const satrec = satellite.satrec;
        const date = new Date();
        const positionAndVelocity = sat.propagate(satrec, date);

        // Calculate orbital elements
        const meanMotion = satrec.no * 60 * 24 / (2 * Math.PI); // Revolutions per day
        const period = 1440 / meanMotion; // Orbital period in minutes
        //const apogee = (satrec.a * (1 + satrec.ecco) - 6371).toFixed(2); // km
        //const perigee = (satrec.a * (1 - satrec.ecco) - 6371).toFixed(2); // km
        const inclination = (satrec.inclo * 180 / Math.PI).toFixed(2); // degrees

        // Calculate current altitude and velocity
        const gmst = sat.gstime(date);
        const position = sat.eciToGeodetic(positionAndVelocity.position, gmst);
        const altitude = (position.height).toFixed(2);  
        const velocity = (Math.sqrt(
            positionAndVelocity.velocity.x ** 2 +
            positionAndVelocity.velocity.y ** 2 +
            positionAndVelocity.velocity.z ** 2
        )).toFixed(2); 

        console.log(`
            Satellite Information:
            ----------------------
            Name: ${satellite.name}
            Inclination: ${inclination}°
            Current Altitude: ${altitude} km
            Current Velocity: ${velocity} km/s
            Orbital Period: ${period.toFixed(2)} min
        `);
        this.infoDisplay.innerHTML = `
            <h2 style="margin: 0 0 10px 0; font-size: 18px;">${satellite.name}</h2>
            <p>Inclination: ${inclination}°</p>
            <p>Altitude: ${altitude} km</p>
            <p>Velocity: ${velocity} km/s</p>
            <p>Period: ${period.toFixed(2)} min</p>
        `;
        this.infoDisplay.style.display = 'block';
    }
}