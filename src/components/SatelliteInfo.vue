<script setup>
import { ref } from 'vue'

const props = defineProps({
    info: {
        type: Object,
        default: () => ({
            name: 'Satellite Name',
            inclination: '0',
            period: '0',
            altitude: '0',
            velocity: '0',
            latitude: '0',
            longitude: '0',
        }),
    },
    visible: {
        type: Boolean,
        default: false,
    },
})

const expanded = ref(false)
</script>

<template>
    <div id="satellite-info" class="info-panel" :class="{ visible, expanded }">
        <div class="info-header">
            <div class="header-content">
                <i data-lucide="satellite"></i>
                <h2 id="satellite-name">{{ info.name }}</h2>
            </div>
            <button id="expand-button" @click="expanded = !expanded">
                <i data-lucide="x"></i>
            </button>
        </div>
        <div class="info-content">
            <div class="info-grid">
                <div class="info-column">
                    <div class="info-item">
                        <label>Inclination</label>
                        <div class="value-container">
                            <span id="satellite-inclination">{{
                                info.inclination
                            }}</span
                            >°
                        </div>
                    </div>
                    <div class="info-item">
                        <label>Period</label>
                        <div class="value-container">
                            <span id="satellite-period">{{ info.period }}</span>
                            min
                        </div>
                    </div>
                </div>
                <div class="info-column">
                    <div class="info-item">
                        <label>Altitude</label>
                        <div class="value-container">
                            <span id="satellite-altitude">{{
                                info.altitude
                            }}</span>
                            km
                        </div>
                    </div>
                    <div class="info-item">
                        <label>Velocity</label>
                        <div class="value-container">
                            <span id="satellite-velocity">{{
                                info.velocity
                            }}</span>
                            km/s
                        </div>
                    </div>
                </div>
            </div>
            <div class="coordinates-section">
                <div class="info-item">
                    <label>Latitude</label>
                    <div class="value-container">
                        <span id="satellite-latitude">{{ info.latitude }}</span
                        >°
                    </div>
                </div>
                <div class="info-item">
                    <label>Longitude</label>
                    <div class="value-container">
                        <span id="satellite-longitude">{{
                            info.longitude
                        }}</span
                        >°
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-panel {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 320px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
    display: none;
}

.info-panel.expanded {
    width: 380px;
}

.info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
}

.header-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

[data-lucide='satellite'] {
    color: #60a5fa;
}

.header-content h2 {
    color: white;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
}

#expand-button {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 4px;
    transition: color 0.3s;
}

#expand-button:hover {
    color: white;
}

.info-content {
    padding: 16px;
}

.info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
}

.info-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-item label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
}

.value-container {
    color: white;
    font-size: 18px;
}

.coordinates-section {
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.info-panel.visible {
    display: block;
    animation: fadeIn 0.3s ease-out;
}
</style>
