import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Earth } from './components/Earth';
import { SatelliteManager } from './components/SatelliteManager';

export class SceneManager {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.earth = new Earth();
        this.satelliteManager = new SatelliteManager(this.scene, this.camera, this.renderer);

        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.z = 20000;
        this.scene.add(this.earth.mesh);

        //this.sunLight = new THREE.DirectionalLight(0xffffff, 1);
        //this.scene.add(this.sunLight);

        // Add stars
    //    this.addStars();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 6500;
        this.controls.maxDistance = 500000;

        this.satelliteManager.createSatellites();

        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    // addStars() {
    //     const starCount = 10000;
    //     const starColors = [0xFFFFFF, 0xFFD700, 0x87CEEB, 0xFF69B4]; // White, Gold, Light Blue, Pink

    //     const geometry = new THREE.BufferGeometry();
    //     const positions = new Float32Array(starCount * 3);
    //     const colors = new Float32Array(starCount * 3);
    //     const sizes = new Float32Array(starCount);

    //     for (let i = 0; i < starCount; i++) {
    //         const i3 = i * 3;
            
    //         // Position
    //         positions[i3] = (Math.random() - 0.5) * 2000000;
    //         positions[i3 + 1] = (Math.random() - 0.5) * 2000000;
    //         positions[i3 + 2] = (Math.random() - 0.5) * 2000000;

    //         // Color
    //         const color = new THREE.Color(starColors[Math.floor(Math.random() * starColors.length)]);
    //         colors[i3] = color.r;
    //         colors[i3 + 1] = color.g;
    //         colors[i3 + 2] = color.b;

    //         // Size
    //         sizes[i] = Math.random() * 5 + 1;
    //     }

    //     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    //     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    //     geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    //     const material = new THREE.ShaderMaterial({
    //         uniforms: {
    //             pointTexture: { value: new THREE.TextureLoader().load('/textures/circle.png') }
    //         },
    //         vertexShader: `
    //             attribute float size;
    //             varying vec3 vColor;
    //             void main() {
    //                 vColor = color;
    //                 vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    //                 gl_PointSize = size * (300.0 / -mvPosition.z);
    //                 gl_Position = projectionMatrix * mvPosition;
    //             }
    //         `,
    //         fragmentShader: `
    //             uniform sampler2D pointTexture;
    //             varying vec3 vColor;
    //             void main() {
    //                 gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
    //             }
    //         `,
    //         blending: THREE.AdditiveBlending,
    //         depthTest: true,
    //         transparent: true
    //     });

    //     const stars = new THREE.Points(geometry, material);
    //     this.scene.add(stars);
    // }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const now = new Date();

        // Calculate mix factor based on time (0 to 1 over 24 hours)
        //const mixFactor = (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
        //this.earth.updateMixFactor(mixFactor);

        this.satelliteManager.updatePositions(now);

        this.controls.update();

        this.renderer.render(this.scene, this.camera);
    }
}