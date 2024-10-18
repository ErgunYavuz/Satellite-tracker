import * as THREE from 'three';

export class Earth {
    constructor() {
        this.radius = 6371; // Earth radius in km
        this.axialTilt = 23.4362 * Math.PI / 180; // Earth's axial tilt in radians
        this.textureLoader = new THREE.TextureLoader();

        const dayTexture = this.textureLoader.load('/textures/earth_day.jpg');

        // Create material for Earth
        const earthMaterial = new THREE.MeshBasicMaterial({
            map: dayTexture
        });

        this.geometry = new THREE.SphereGeometry(this.radius, 64, 64);
        this.mesh = new THREE.Mesh(this.geometry, earthMaterial);

        // Create a container for the Earth and its ECEF frame
        this.container = new THREE.Object3D();
        this.container.add(this.mesh);

        // Apply axial tilt to the container
        this.container.rotation.x = this.axialTilt;

        this.addECIScale();
        this.addECEFScale();

        // Set up rotation
        this.rotationSpeed = 7.2921159e-5; // radians per second (Earth's rotation rate)
        this.initializeRotation();
        this.lastUpdateTime = Date.now();
    }

    addDot(latitude, longitude, color = 0xff0000, size = 0.1) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = (longitude + 180) * (Math.PI / 180);

        const x = -(this.radius * Math.sin(phi) * Math.cos(theta));
        const z = (this.radius * Math.sin(phi) * Math.sin(theta));
        const y = (this.radius * Math.cos(phi));

        const dotGeometry = new THREE.SphereGeometry(size * this.radius / 100);
        const dotMaterial = new THREE.MeshBasicMaterial({ color: color });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);

        dot.position.set(x, y, z);
        this.mesh.add(dot);

        return dot;
    }

    addECIScale() {
        const axisLength = this.radius * 1.5;
        const axisWidth = this.radius * 0.01;

        // X-axis (red)
        const xAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const xAxisMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const xAxis = new THREE.Mesh(xAxisGeometry, xAxisMaterial);
        xAxis.rotation.z = Math.PI / 2;
        xAxis.position.x = axisLength / 2;

        // Y-axis (green)
        const yAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const yAxisMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const yAxis = new THREE.Mesh(yAxisGeometry, yAxisMaterial);
        yAxis.position.y = axisLength / 2;

        // Z-axis (blue)
        const zAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const zAxisMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const zAxis = new THREE.Mesh(zAxisGeometry, zAxisMaterial);
        zAxis.rotation.x = Math.PI / 2;
        zAxis.position.z = axisLength / 2;

        // Add axis labels
        const labelSize = this.radius * 0.1;
        const labelOffset = axisLength / 2 + labelSize / 2;

        const xLabel = this.createAxisLabel('X', 0xff0000);
        xLabel.position.set(labelOffset, 0, 0);

        const yLabel = this.createAxisLabel('Y', 0x00ff00);
        yLabel.position.set(0, labelOffset, 0);

        const zLabel = this.createAxisLabel('Z', 0x0000ff);
        zLabel.position.set(0, 0, labelOffset);

        // Add axes and labels to the container
        this.container.add(xAxis, yAxis, zAxis, xLabel, yLabel, zLabel);
    }

    addECEFScale() {
        const axisLength = this.radius * 1.2;
        const axisWidth = this.radius * 0.005;

        // X-axis (orange)
        const xAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const xAxisMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const xAxis = new THREE.Mesh(xAxisGeometry, xAxisMaterial);
        xAxis.rotation.z = Math.PI / 2;
        xAxis.position.x = axisLength / 2;

        // Y-axis (magenta)
        const yAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const yAxisMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        const yAxis = new THREE.Mesh(yAxisGeometry, yAxisMaterial);
        yAxis.position.y = axisLength / 2;

        // Z-axis (cyan)
        const zAxisGeometry = new THREE.CylinderGeometry(axisWidth, axisWidth, axisLength);
        const zAxisMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const zAxis = new THREE.Mesh(zAxisGeometry, zAxisMaterial);
        zAxis.rotation.x = Math.PI / 2;
        zAxis.position.z = axisLength / 2;

        // Add axis labels
        const labelSize = this.radius * 0.08;
        const labelOffset = axisLength / 2 + labelSize / 2;

        const xLabel = this.createAxisLabel('X\'', 0xffa500);
        xLabel.position.set(labelOffset, 0, 0);

        const yLabel = this.createAxisLabel('Y\'', 0xff00ff);
        yLabel.position.set(0, labelOffset, 0);

        const zLabel = this.createAxisLabel('Z\'', 0x00ffff);
        zLabel.position.set(0, 0, labelOffset);

        // Add ECEF axes and labels to the Earth mesh
        this.mesh.add(xAxis, yAxis, zAxis, xLabel, yLabel, zLabel);
    }

    createAxisLabel(text, color) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 64;
        canvas.height = 64;

        context.fillStyle = `rgb(${color >> 16}, ${(color >> 8) & 255}, ${color & 255})`;
        context.font = 'Bold 32px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.SpriteMaterial({ map: texture });
        return new THREE.Sprite(labelMaterial);
    }

    initializeRotation() {
        const now = new Date();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        const utcSeconds = now.getUTCSeconds();
        
        // Calculate the fraction of a day that has passed
        const dayFraction = (utcHours + utcMinutes / 60 + utcSeconds / 3600) / 24;
        
        // Convert to radians
        this.initialRotation = dayFraction * 2 * Math.PI;
        
        // Apply the initial rotation
        this.mesh.rotation.y = this.initialRotation;
    }

    update(currentTime) {
        const deltaTime = (currentTime - this.lastUpdateTime) / 1000; // Convert to seconds
        this.lastUpdateTime = currentTime;

        // Update the rotation
        this.mesh.rotation.y += this.rotationSpeed * deltaTime;
        this.mesh.rotation.y %= (2 * Math.PI); // Keep the angle between 0 and 2π
    }

    getCurrentRotationAngle() {
        return this.mesh.rotation.y;
    }

    getAxialTilt() {
        return this.axialTilt;
    }

    // Convert ECI coordinates to ECEF
    eciToEcef(eciCoords) {
        // Create a rotation matrix that combines axial tilt and Earth's rotation
        const rotationMatrix = new THREE.Matrix4()
            .makeRotationX(-this.axialTilt)
            .multiply(new THREE.Matrix4().makeRotationY(-this.getCurrentRotationAngle()));
        return eciCoords.applyMatrix4(rotationMatrix);
    }

    // Convert ECEF coordinates to ECI
    ecefToEci(ecefCoords) {
        // Create a rotation matrix that combines axial tilt and Earth's rotation
        const rotationMatrix = new THREE.Matrix4()
            .makeRotationY(this.getCurrentRotationAngle())
            .multiply(new THREE.Matrix4().makeRotationX(this.axialTilt));
        return ecefCoords.applyMatrix4(rotationMatrix);
    }
}