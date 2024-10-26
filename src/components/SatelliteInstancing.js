import * as THREE from 'three';

const DEFAULTCOLOR = new THREE.Color(0xffffff);
const HIGHLIGHTCOLOR = new THREE.Color(0xffff00);

export class SatelliteInstancing {
    constructor(count) {
        // Create instanced mesh for satellites
        const spriteGeometry = new THREE.SphereGeometry(50, 8, 8); // Simplified geometry for instances
        const spriteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        this.mesh = new THREE.InstancedMesh(
            spriteGeometry,
            spriteMaterial,
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