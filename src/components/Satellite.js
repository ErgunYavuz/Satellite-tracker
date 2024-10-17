import * as THREE from 'three';
import * as satellite from 'satellite.js';


export class Satellite {

    positionAndVelocity;
    oribitLine;

    constructor(name, tle1, tle2) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);

        const texture = this.createTexture();
        const map = new THREE.TextureLoader().load("/textures/dot.png")

        this.spriteMaterial = new THREE.SpriteMaterial({ 
            map: map,
            color: 0xffffff,
            transparent: true
        });

        this.sprite = new THREE.Sprite(this.spriteMaterial);
        this.sprite.scale.set(100, 100, 1);
        
        this.defaultColor = new THREE.Color(0xffffff);
        this.highlightColor = new THREE.Color(0xffff00);
        
        this.sprite.userData.clickable = true;
        this.sprite.userData.satellite = this;
    }

    createTexture() {
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
        this.date = date;
        this.positionAndVelocity = satellite.propagate(this.satrec, this.date);
        if (this.positionAndVelocity.position) {
            const eci = this.positionAndVelocity.position;
            this.sprite.position.set(eci.x ,eci.z ,-eci.y);
        }
    }

    getOrbitalPeriod(){
        const meanMotion = this.satrec.no * 60 * 24 / (2 * Math.PI); // Revolutions per day
        return (1440 / meanMotion).toFixed(2); // Orbital period in minutes
    }

    getSatelliteInfo(){
        const name = this.name;
        const period = this.getOrbitalPeriod();
        //const apogee = (satrec.a * (1 + satrec.ecco) - 6371).toFixed(2); // km
        //const perigee = (satrec.a * (1 - satrec.ecco) - 6371).toFixed(2); // km
        const inclination = (this.satrec.inclo * 180 / Math.PI).toFixed(2); // degrees

        // Calculate current altitude and velocity
        const gmst = satellite.gstime(this.date);
        const position = satellite.eciToGeodetic(this.positionAndVelocity.position, gmst);
        const altitude = (position.height).toFixed(2);  
        const velocity = (Math.sqrt(
            this.positionAndVelocity.velocity.x ** 2 +
            this.positionAndVelocity.velocity.y ** 2 +
            this.positionAndVelocity.velocity.z ** 2
        )).toFixed(2); 
        return {name, inclination, altitude, velocity, period};
    }

    getTrajectory() {
        const pointsCount = 200;
        const points = [];
        const orbitalPeriod = this.getOrbitalPeriod();
        for (let i = 0; i < pointsCount; i++) {
            const futureDate = new Date(this.date.getTime() + (i / pointsCount) * orbitalPeriod * 60000);
            const positionAndVelocity = satellite.propagate(this.satrec, futureDate);
            if (positionAndVelocity.position) {
                const eci = positionAndVelocity.position;
                const vector = new THREE.Vector3(eci.x, eci.z, -eci.y);
                points.push(vector);
            }
        }

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
        this.oribitLine = new THREE.Line(lineGeometry, lineMaterial);
    }

    toggle(){
        this.getTrajectory();
        this.spriteMaterial.color.copy(this.highlightColor);
        this.sprite.renderOrder = 1;
        this.oribitLine.visible = true;
        this.sprite.parent.add(this.oribitLine);
    }

    untoggle(){
        this.spriteMaterial.color.copy(this.defaultColor);
        this.sprite.renderOrder = 0;
        this.oribitLine.visible = false
        this.sprite.parent.remove(this.oribitLine);
    }
}