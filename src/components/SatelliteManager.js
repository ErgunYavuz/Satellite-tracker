import { Satellite } from './Satellite';
import { SatelliteTrajectory } from './SatelliteTrajectory';

export class SatelliteManager {
    constructor(scene) {
        this.scene = scene;
        this.satellites = [];
        this.trajectories = [];
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

            const trajectory = new SatelliteTrajectory(satellite.mesh, satellite.satrec);
            this.scene.add(trajectory.line);
            this.trajectories.push(trajectory);
            console.log(satellite);
            if (this.satellites.length >= 10) break; // Limit to 10 satellites for performance
        }
        console.log(this.satellites.length);
    }

    updatePositions(date) {
        this.satellites.forEach((satellite, index) => {
            satellite.updatePosition(date);
            //this.trajectories[index].update(date);
        });
    }
}