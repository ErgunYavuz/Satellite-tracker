import './style.css'
import { SceneManager } from './core/SceneManager'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
setActivePinia(pinia)

const container = document.getElementById('scene-container')
const sceneManager = new SceneManager(container, 150, true)
sceneManager.animate()

app.mount('#app')
