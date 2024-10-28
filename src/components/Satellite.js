import * as THREE from 'three';
import * as satellite from 'satellite.js';

const DEFAULTCOLOR = new THREE.Color(0xffffff);
const HIGHLIGHTCOLOR = new THREE.Color(0x00ff00);

export class Satellite {
    positionAndVelocity;
    oribitLine;
    groundTrackLine;

    constructor(name, tle1, tle2) {
        this.name = name;
        this.satrec = satellite.twoline2satrec(tle1, tle2);
        this.color = DEFAULTCOLOR.clone();
        this.selected = false;
        this.position = new THREE.Vector3();
        
        const groundTrackGeometry = new THREE.BufferGeometry();
        const groundTrackMaterial = new THREE.LineBasicMaterial({ color: HIGHLIGHTCOLOR });
        this.groundTrackLine = new THREE.Line(groundTrackGeometry, groundTrackMaterial);
    }

    updatePosition(date) {
        this.date = date;
        this.positionAndVelocity = satellite.propagate(this.satrec, this.date);
        if (this.positionAndVelocity.position) {
            const eci = this.positionAndVelocity.position;
            this.position.set(eci.x, eci.z, -eci.y);
        }
        if (this.selected) {
            this.groundTrackLine.geometry.setFromPoints([new THREE.Vector3(0, 0, 0), this.position]);
        }
    }

    getOrbitalPeriod(){
        const meanMotion = this.satrec.no * 60 * 24 / (2 * Math.PI); // Revolutions per day
        return (1440 / meanMotion).toFixed(2); // Orbital period in minutes
    }

    getSatelliteInfo(){
        const period = this.getOrbitalPeriod();
        // const apogee = (this.satrec.a * (1 + this.satrec.ecco) - 6371).toFixed(2); // km
        // const perigee = (this.satrec.a * (1 - this.satrec.ecco) - 6371).toFixed(2); // km
        const inclination = (this.satrec.inclo * 180 / Math.PI).toFixed(2); // degrees

        const gmst = satellite.gstime(this.date);
        const position = satellite.eciToGeodetic(this.positionAndVelocity.position, gmst);

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

    getProjectedPath() {
        const pointsCount = 1000;
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
            color: HIGHLIGHTCOLOR,
            linewidth: 2 
        });
        this.oribitLine = new THREE.LineSegments(lineGeometry, lineMaterial);
    }

    dispose() {
        if (this.oribitLine) {
            this.oribitLine.geometry.dispose();
            this.oribitLine.material.dispose();
        }
        if (this.groundTrackLine) {
            this.groundTrackLine.geometry.dispose();
            this.groundTrackLine.material.dispose();
        }
    }

    toggle(scene){
        this.selected = true;
        this.color.copy(HIGHLIGHTCOLOR);
        this.getProjectedPath();
        scene.add(this.oribitLine);
        scene.add(this.groundTrackLine);
    }

    untoggle(scene){
        this.selected = true;
        this.color.copy(DEFAULTCOLOR);
        scene.remove(this.oribitLine);
        scene.remove(this.groundTrackLine);
        this.oribitLine.geometry.dispose();
        this.oribitLine.material.dispose();
        this.groundTrackLine.geometry.dispose();
        this.groundTrackLine.material.dispose();
    }
}