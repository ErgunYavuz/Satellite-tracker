import * as THREE from 'three';
import * as satellite from 'satellite.js';

const DEFAULTCOLOR = new THREE.Color(0xffffff);
const HIGHLIGHTCOLOR = new THREE.Color(0xffff00);

export class Satellite {
    positionAndVelocity;
    oribitLine;
    groundTrackLine;

    constructor(name, tle1, tle2) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);

        const texture = this.createTexture();
        //const map = new THREE.TextureLoader().load("/textures/dot.png")

        this.spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            color: 0xffffff,
            transparent: true
        });

        this.sprite = new THREE.Sprite(this.spriteMaterial);
        this.sprite.scale.set(100, 100, 1);
        
        this.sprite.userData.clickable = true;
        this.sprite.userData.satellite = this;

        const groundTrackGeometry = new THREE.BufferGeometry();
        const groundTrackMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Red color
        this.groundTrackLine = new THREE.Line(groundTrackGeometry, groundTrackMaterial);
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

    updatePosition(date, selected = false) {
        this.date = date;
        this.positionAndVelocity = satellite.propagate(this.satrec, this.date);
        if (this.positionAndVelocity.position) {
            const eci = this.positionAndVelocity.position;
            this.sprite.position.set(eci.x ,eci.z ,-eci.y);
        }
        if (selected){
            this.groundTrackLine.geometry.setFromPoints([new THREE.Vector3(0, 0, 0), this.sprite.position]);
        }
    }

    getOrbitalPeriod(){
        const meanMotion = this.satrec.no * 60 * 24 / (2 * Math.PI); // Revolutions per day
        return Math.ceil(1440 / meanMotion)//.toFixed(2); // Orbital period in minutes
    }

    getSatelliteInfo(){
        const period = this.getOrbitalPeriod();
        // const apogee = (this.satrec.a * (1 + this.satrec.ecco) - 6371).toFixed(2); // km
        // const perigee = (this.satrec.a * (1 - this.satrec.ecco) - 6371).toFixed(2); // km
        const inclination = (this.satrec.inclo * 180 / Math.PI).toFixed(2); // degrees

        // Calculate current altitude and velocity
        const gmst = satellite.gstime(this.date);
        const position = satellite.eciToGeodetic(this.positionAndVelocity.position, gmst);
        // Calculate latitude and longitude
        const latitude = satellite.degreesLat(position.latitude).toFixed(2);
        const longitude = satellite.degreesLong(position.longitude).toFixed(2);;
        const altitude = (position.height).toFixed(2);  
        const velocity = (Math.sqrt(
            this.positionAndVelocity.velocity.x ** 2 +
            this.positionAndVelocity.velocity.y ** 2 +
            this.positionAndVelocity.velocity.z ** 2
        )).toFixed(2); 
        return {name: this.name, inclination, latitude, longitude, altitude, velocity, period};
    }

    getTrajectory() {
        const pointsCount = 360;
        const points = [];
        const orbitalPeriod = this.getOrbitalPeriod();

        // building a line of points of the future position of the satellites
        // TODO: learn astrodynamics to calculate trajectories
        for (let i = 0; i < pointsCount; i++) {
            const futureDate = new Date(this.date.getTime() + (i / pointsCount) * orbitalPeriod * 60000);
            const positionAndVelocity = satellite.propagate(this.satrec, futureDate);
            if (positionAndVelocity.position) {
                const eci = positionAndVelocity.position;
                const vector = new THREE.Vector3(eci.x, eci.z, -eci.y);
                points.push(vector);
            }
        }

        points.push(points[0].clone());

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xffff00,
            linewidth: 2 
        });
        this.oribitLine = new THREE.LineSegments(lineGeometry, lineMaterial);
    }

    toggle(){
        this.getTrajectory();
        this.spriteMaterial.color.copy(HIGHLIGHTCOLOR);
        this.sprite.renderOrder = 1;
        this.oribitLine.visible = true;
        this.groundTrackLine.visible = true;
        this.sprite.parent.add(this.oribitLine);
        this.sprite.parent.add(this.groundTrackLine);
    }

    untoggle(){
        this.spriteMaterial.color.copy(DEFAULTCOLOR);
        this.sprite.renderOrder = 0;
        this.oribitLine.visible = false;
        this.groundTrackLine.visible = false;
        this.sprite.parent.remove(this.oribitLine);
        this.sprite.parent.remove(this.groundTrackLine);
    }

    // latLongToVector3(lat, lon, radius) {
    //     //console.log(this.name, lat, lon, radius)
    //     const phi = (90 - lat) * (Math.PI / 180);
    //     const theta = (lon + 180) * (Math.PI / 180);
    
    //     const x = -(radius * Math.sin(phi) * Math.cos(theta));
    //     const z = (radius * Math.sin(phi) * Math.sin(theta));
    //     const y = (radius * Math.cos(phi));

    //     return new THREE.Vector3(x, y, z);
    // }
}