import * as THREE from 'three';
import * as satellite from 'satellite.js';

export class Satellite {
    constructor(name, tle1, tle2) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);

        // Create a sprite instead of a sphere
        const spriteMaterial = new THREE.SpriteMaterial({ color: 0xff00ff });
        this.sprite = new THREE.Sprite(spriteMaterial);

        // Scale the sprite size (optional)
        this.sprite.scale.set(150, 150, 1);  // Adjust size to your preference
    }

    updatePosition(date) {
        const positionAndVelocity = satellite.propagate(this.satrec, date);
        const gmst = satellite.gstime(date);
        const position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

        const { longitude, latitude, height } = position;
        this.sprite.position.copy(this.latLonToVector3(latitude, longitude, height));
    }

    latLonToVector3(lat, lon, alt) {
        const phi = (90 - satellite.degreesLat(lat)) * (Math.PI / 180);
        const theta = (satellite.degreesLong(lon) + 180) * (Math.PI / 180);
        const radius = 6371 + alt;

        return new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );
    }
}