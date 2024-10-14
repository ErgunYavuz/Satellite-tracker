import * as THREE from 'three';
import * as satellite from 'satellite.js';

export class SatelliteTrajectory {
    constructor(satelliteSprite, satrec) {
        this.satelliteSprite = satelliteSprite;
        this.satrec = satrec;
        this.lineGeometry = new THREE.BufferGeometry();
        this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
        this.line = new THREE.Line(this.lineGeometry, this.lineMaterial);
        this.line.visible = false;
        this.calculateTrajectory();
    }

    calculateTrajectory() {
        const points = [];
        const date = new Date();
        
        const orbitalPeriod = this.calculateOrbitalPeriod();
        
        const pointsCount = 200;
        for (let i = 0; i < pointsCount; i++) {
            const futureDate = new Date(date.getTime() + (i / pointsCount) * orbitalPeriod * 60000);
            const positionAndVelocity = satellite.propagate(this.satrec, futureDate);
            
            if (positionAndVelocity.position) {
                const eci = positionAndVelocity.position;
                const vector = new THREE.Vector3(eci.x, eci.z, -eci.y);
                points.push(vector);
            }
        }

        this.lineGeometry.setFromPoints(points);
    }

    calculateOrbitalPeriod() {
        const minutePerDay = 1440;
        const meanMotion = this.satrec.no * minutePerDay / (2 * Math.PI);
        return minutePerDay / meanMotion;
    }

    show() {
        this.line.visible = true;
    }

    hide() {
        this.line.visible = false;
    }
}