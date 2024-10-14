import * as THREE from 'three';

export class Earth {
    constructor() {
        this.radius = 6371; // Earth radius in km
        this.textureLoader = new THREE.TextureLoader();

        const dayTexture = this.textureLoader.load('/textures/earth_day.jpg');
        const nightTexture = this.textureLoader.load('/textures/earth_night.jpg');
        const cloudsTexture = this.textureLoader.load('/textures/earth_clouds.jpg');

        // Create material for Earth
        const earthMaterial = new THREE.ShaderMaterial({
            uniforms: {
                dayTexture: { value: dayTexture },
                nightTexture: { value: nightTexture },
                cloudsTexture: { value: cloudsTexture },
                mixFactor: { value: 0.5 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D dayTexture;
                uniform sampler2D nightTexture;
                uniform sampler2D cloudsTexture;
                uniform float mixFactor;
                varying vec2 vUv;
                void main() {
                    vec4 dayColor = texture2D(dayTexture, vUv);
                    vec4 nightColor = texture2D(nightTexture, vUv);
                    vec4 cloudsColor = texture2D(cloudsTexture, vUv);
                    
                    vec4 earthColor = mix(nightColor, dayColor, mixFactor);
                    gl_FragColor = mix(earthColor, cloudsColor, cloudsColor.a * 0.5);
                }
            `
        });

        this.geometry = new THREE.SphereGeometry(this.radius, 64, 64);
        this.mesh = new THREE.Mesh(this.geometry, earthMaterial);

    }

    // updateMixFactor(factor) {
    //     this.mesh.material.uniforms.mixFactor.value = factor;
    // }
}