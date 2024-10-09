import * as THREE from 'three';
import * as satellite from 'satellite.js';

export class Satellite {
    constructor(name, tle1, tle2) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);
        
        // Create a circular texture with fading edges
        const texture = this.createCircularTexture();
        
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            color: 0xff0000,
            transparent: true
        });
        this.sprite = new THREE.Sprite(spriteMaterial);
        this.sprite.scale.set(100, 100, 1);
        
        this.originalColor = new THREE.Color(0xff0000);
        
        this.sprite.userData.clickable = true;
        this.sprite.userData.satellite = this;
        this.isTrajectoryVisible = false;
    }

    createCircularTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2;

        const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.fill();

        return new THREE.CanvasTexture(canvas);
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

    highlight() {
        this.sprite.material.color.setHex(0xffff00);
    }

    unhighlight() {
        this.sprite.material.color.copy(this.originalColor);
    }

    toggleTrajectory(visible) {
        this.isTrajectoryVisible = visible;
    }
}