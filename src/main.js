import './style.css'
import { SceneManager } from './core/SceneManager';
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'

// Create Vue app and Pinia first so stores are available outside components
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// Ensure Pinia is active for non-component usage (Three.js classes)
setActivePinia(pinia)

// Now initialize Three.js which uses the store
const container = document.getElementById('scene-container');
const sceneManager = new SceneManager(container);
sceneManager.animate();

// Mount the Vue UI
app.mount('#app')