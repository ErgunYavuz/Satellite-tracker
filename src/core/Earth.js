import * as THREE from 'three';
import * as satellite from 'satellite.js';

const RADIUSS = 6371; // Earth radius in km
const ROTATIONSPEED = 7.2921159e-5; // Earth's rotation speed in radians per second

export class Earth {
    constructor(scene) {
        this.scene = scene;        
        const textureLoader = new THREE.TextureLoader();

        const dayTexture = textureLoader.load('/Satellite-tracker/textures/earth_day.jpg');
        const earthMaterial = new THREE.MeshBasicMaterial({
            map: dayTexture
        });
        const geometry = new THREE.SphereGeometry(RADIUSS, 64, 64);

        this.earthMesh = new THREE.Mesh(geometry, earthMaterial);

        // Set initial rotation based on GMST
        this.earthMesh.rotation.y = satellite.gstime(new Date());

        scene.add(this.earthMesh)
    }

    update(deltaTime) {
        this.earthMesh.rotation.y += ROTATIONSPEED * deltaTime / 1000; // Convert deltaTime to seconds 
    }

    // addDot(latitude, longitude, color = 0xff0000, size = 0.1) {
    //     const phi = (90 - latitude) * (Math.PI / 180);
    //     const theta = (longitude + 180) * (Math.PI / 180);

    //     const x = -(this.radius * Math.sin(phi) * Math.cos(theta));
    //     const z = (this.radius * Math.sin(phi) * Math.sin(theta));
    //     const y = (this.radius * Math.cos(phi));

    //     const dotGeometry = new THREE.SphereGeometry(size * this.radius / 100);
    //     const dotMaterial = new THREE.MeshBasicMaterial({ color: color });
    //     const dot = new THREE.Mesh(dotGeometry, dotMaterial);

    //     dot.position.set(x, y, z);
    //     this.mesh.add(dot);

    //     return dot;
    // }
}


