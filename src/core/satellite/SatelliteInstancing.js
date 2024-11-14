import * as THREE from 'three';

const DEFAULTCOLOR = new THREE.Color(0xffffff);

export class SatelliteInstancing {
    constructor(count) {
        // Create instanced mesh for satellites
        const geometry = new THREE.SphereGeometry(40, 16, 16); 
        const material = new THREE.PointsMaterial({ 
            color: DEFAULTCOLOR,
            size: 50,
            transparent: true,
            sizeAttenuation: true,
            opacity: 0.8
        });
        
        this.mesh = new THREE.InstancedMesh(
            geometry,
            material,
            count
        );
        
        // Initialize matrices and colors
        this.matrix = new THREE.Matrix4();
        this.color = new THREE.Color();
        
        // Initialize all instances with default transforms
        for (let i = 0; i < count; i++) {
            this.matrix.makeTranslation(0, 0, 0);
            this.mesh.setMatrixAt(i, this.matrix);
            this.mesh.setColorAt(i, DEFAULTCOLOR);
        }
        
        this.mesh.instanceMatrix.needsUpdate = true;
        this.mesh.instanceColor.needsUpdate = true;
    }

    updateInstance(index, position, color) {
        this.matrix.makeTranslation(position.x, position.y, position.z);
        this.mesh.setMatrixAt(index, this.matrix);
        this.mesh.setColorAt(index, color);
        
        this.mesh.instanceMatrix.needsUpdate = true;
        this.mesh.instanceColor.needsUpdate = true;
    }
}