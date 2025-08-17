// SatelliteInstancing.js
import * as THREE from 'three';

const DEFAULTCOLOR = new THREE.Color(0xffffff);

/** Create a small circular sprite once and reuse it. */
function makeCircleTexture(size = 64) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  // transparent background
  ctx.clearRect(0, 0, size, size);
  // soft-edged white disc (anti-aliased by canvas)
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

export class SatelliteInstancing {
  constructor(count, {
    size = 5,               // pixel size of each point
    opacity = 0.95,
    transparent = true,
    sizeAttenuation = false,   // makes points scale with perspective
    circleTextureSize = 64,   // resolution of the generated round sprite
  } = {}) {
    this.count = Math.max(0, count | 0);

    // CPU-side arrays
    this.positions = new Float32Array(this.count * 3);
    this.colors    = new Float32Array(this.count * 3);

    // Geometry & attributes (GPU side)
    this.geometry = new THREE.BufferGeometry();
    this.positionAttr = new THREE.BufferAttribute(this.positions, 3);
    this.colorAttr    = new THREE.BufferAttribute(this.colors, 3);

    // Hint: we update every frame
    this.positionAttr.setUsage(THREE.DynamicDrawUsage);
    this.colorAttr.setUsage(THREE.DynamicDrawUsage);

    this.geometry.setAttribute('position', this.positionAttr);
    this.geometry.setAttribute('color', this.colorAttr);

    // Round sprite texture for circular points
    this.circleTexture = makeCircleTexture(circleTextureSize);

    // Points material with circular alpha (round dots!)
    this.material = new THREE.PointsMaterial({
      size,
      sizeAttenuation,
      transparent,
      opacity,
      vertexColors: true,
      map: this.circleTexture, // <<< round sprite
      alphaTest: 0.5,          // discard outside the circle (keeps depthWrite OK)
      depthWrite: true,        // correct occlusion between dots
    });

    // Single draw call object
    this.mesh = new THREE.Points(this.geometry, this.material);
    this.mesh.frustumCulled = true;

    // temp color (to avoid allocating)
    this._tmpColor = new THREE.Color();

    // Track the highest index we touched this frame
    this._touchedMaxIndex = -1;

    // Initial tiny bounding sphere to suppress warnings before first commit()
    this.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1);
  }


  /**
   * Update a single point's position & color (call in your loop).
   * Call commit() once after all updates.
   */
  updateInstance(index, position, color = DEFAULTCOLOR) {
    if (index < 0 || index >= this.count) return;

    const i3 = index * 3;

    // Position
    this.positions[i3    ] = position.x;
    this.positions[i3 + 1] = position.y;
    this.positions[i3 + 2] = position.z;

    const c = this._tmpColor;
    c.copy(color);

    this.colors[i3    ] = c.r;
    this.colors[i3 + 1] = c.g;
    this.colors[i3 + 2] = c.b;

    if (index > this._touchedMaxIndex) this._touchedMaxIndex = index;
  }

  /**
   * Push CPU changes to GPU. Call once per frame after your updates.
   */
  commit({ recomputeBounds = true } = {}) {
    if (this._touchedMaxIndex < 0) return; // nothing changed

    this.positionAttr.needsUpdate = true;
    this.colorAttr.needsUpdate = true;

    if (recomputeBounds) {
      // Recompute bounding sphere so frustum culling works correctly.
      this.geometry.computeBoundingSphere();
    }

    // Reset touched range for the next frame
    this._touchedMaxIndex = -1;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    if (this.circleTexture) this.circleTexture.dispose();
  }
}
