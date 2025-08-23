import * as THREE from 'three'

const DEFAULTCOLOR = new THREE.Color(0xffffff)

function makeCircleTexture(size = 64) {
    const c = document.createElement('canvas')
    c.width = c.height = size
    const ctx = c.getContext('2d')

    // radial gradient for a soft edge
    const g = ctx.createRadialGradient(
        size / 2,
        size / 2,
        size * 0.35,
        size / 2,
        size / 2,
        size * 0.5
    )
    g.addColorStop(0.0, 'rgba(255,255,255,1)')
    g.addColorStop(1.0, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)

    const tex = new THREE.CanvasTexture(c)
    tex.generateMipmaps = true
    tex.minFilter = THREE.LinearMipmapLinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
    return tex
}

export class SatelliteInstancing {
    constructor(
        count,
        {
            size = 5,
            opacity = 0.95,
            transparent = true,
            sizeAttenuation = true,
            circleTextureSize = 64,
        } = {}
    ) {
        this.count = Math.max(0, count | 0)

        this.positions = new Float32Array(this.count * 3)
        this.colors = new Float32Array(this.count * 3)

        this.geometry = new THREE.BufferGeometry()
        this.positionAttr = new THREE.BufferAttribute(this.positions, 3)
        this.colorAttr = new THREE.BufferAttribute(this.colors, 3)

        this.positionAttr.setUsage(THREE.DynamicDrawUsage)
        this.colorAttr.setUsage(THREE.DynamicDrawUsage)

        this.geometry.setAttribute('position', this.positionAttr)
        this.geometry.setAttribute('color', this.colorAttr)

        this.circleTexture = makeCircleTexture(circleTextureSize)

        this.material = new THREE.PointsMaterial({
            size,
            sizeAttenuation,
            transparent,
            opacity,
            vertexColors: true,
            map: this.circleTexture,
            alphaTest: 0.5,
            depthWrite: true,
        })

        this.mesh = new THREE.Points(this.geometry, this.material)
        this.mesh.frustumCulled = true

        this._tmpColor = new THREE.Color()

        this._touchedMaxIndex = -1

        this.geometry.boundingSphere = new THREE.Sphere(
            new THREE.Vector3(0, 0, 0),
            1
        )
    }

    updateInstance(index, position, color = DEFAULTCOLOR) {
        if (index < 0 || index >= this.count) return

        const i3 = index * 3

        this.positions[i3] = position.x
        this.positions[i3 + 1] = position.y
        this.positions[i3 + 2] = position.z

        this.colors[i3] = color.r
        this.colors[i3 + 1] = color.g
        this.colors[i3 + 2] = color.b

        if (index > this._touchedMaxIndex) this._touchedMaxIndex = index
    }

    commit({ recomputeBounds = true } = {}) {
        if (this._touchedMaxIndex < 0) return
        this.positionAttr.needsUpdate = true
        this.colorAttr.needsUpdate = true
        if (recomputeBounds) {
            this.geometry.computeBoundingSphere()
        }
        this._touchedMaxIndex = -1
    }

    dispose() {
        this.geometry.dispose()
        this.material.dispose()
        if (this.circleTexture) this.circleTexture.dispose()
    }
}
