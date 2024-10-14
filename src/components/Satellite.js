import * as THREE from 'three';
import * as satellite from 'satellite.js';
import { SatelliteTrajectory } from './SatelliteTrajectory.js';


export class Satellite {
    constructor(name, tle1, tle2, scaleFactor = 1) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);
        //this.scaleFactor = scaleFactor;
        
        const texture = this.createCircularTexture();
        
        this.spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            color: 0xffffff,
            transparent: true
        });
        this.sprite = new THREE.Sprite(this.spriteMaterial);
        this.sprite.scale.set(125, 125, 1);
        
        this.defaultColor = new THREE.Color(0xffffff);
        this.highlightColor = new THREE.Color(0xffff00);
        
        this.sprite.userData.clickable = true;
        this.sprite.userData.satellite = this;
        this.isTrajectoryVisible = false;
        this.isHighlighted = false;
    }

    createCircularTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');

        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);

        return new THREE.CanvasTexture(canvas);
    }

    updatePosition(date) {
        const positionAndVelocity = satellite.propagate(this.satrec, date);
        if (positionAndVelocity.position) {
            const eci = positionAndVelocity.position;
            this.sprite.position.set(
            //     eci.x * this.scaleFactor,
            //     eci.z * this.scaleFactor,
            //     -eci.y * this.scaleFactor
                eci.x ,
                eci.z ,
                -eci.y 
            );
        }
    }

    highlight() {
        this.isHighlighted = true;
        this.spriteMaterial.color.copy(this.highlightColor);
        this.sprite.renderOrder = 1;
    }

    unhighlight() {
        this.isHighlighted = false;
        this.spriteMaterial.color.copy(this.defaultColor);
        this.sprite.renderOrder = 0;
    }

    toggleTrajectory(visible) {
        this.isTrajectoryVisible = visible;
    }

    setScale(newScaleFactor) {
        this.scaleFactor = newScaleFactor;
    }
}