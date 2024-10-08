import * as THREE from 'three';

export class Earth {
    constructor() {
        this.radius = 6371; // Earth radius in km
        this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: 0x2233ff, wireframe: true });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    rotate() {
        this.mesh.rotation.y += 0.005;
    }
}