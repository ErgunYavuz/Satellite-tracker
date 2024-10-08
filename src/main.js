import './style.css'
import { SceneManager } from './SceneManager';

const container = document.getElementById('scene-container');
const sceneManager = new SceneManager(container);
sceneManager.animate();