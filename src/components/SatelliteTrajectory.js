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

        this.createFullTrajectory();
    }

    createFullTrajectory() {
        const points = [];
        const date = new Date();
        for (let i = 0; i < 360; i++) {
            const futureDate = new Date(date.getTime() + i * 60000); // 1 minute steps
            const positionAndVelocity = satellite.propagate(this.satrec, futureDate);
            const gmst = satellite.gstime(futureDate);
            const position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

            const vector = this.latLonToVector3(
                satellite.degreesLat(position.latitude),
                satellite.degreesLong(position.longitude),
                position.height
            );
            points.push(vector);
        }

        this.lineGeometry.setFromPoints(points);
    }

    latLonToVector3(lat, lon, alt) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        const radius = 6371 + alt;

        return new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );
    }

    toggleVisibility() {
        this.line.visible = !this.line.visible;
    }
}