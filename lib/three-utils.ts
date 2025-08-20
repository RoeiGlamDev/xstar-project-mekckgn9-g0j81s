import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene with a dark background
export const createScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background
    return scene;
};

// Function to create a camera
export const createCamera = (fov: number, aspect: number, near: number, far: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 5); // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (canvas: HTMLCanvasElement): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Handle pixel ratio
    return renderer;
};

// Function to create ambient light
export const createAmbientLight = (): THREE.AmbientLight => {
    const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    return light;
};

// Function to create directional light
export const createDirectionalLight = (): THREE.DirectionalLight => {
    const light = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
    light.position.set(5, 10, 7.5); // Set light position
    return light;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void => {
    const render = () => {
        requestAnimationFrame(render);
        renderer.render(scene, camera); // Render the scene
    };
    render();
}; 

// Default export for utility functions
export default {
    createScene,
    createCamera,
    createRenderer,
    createAmbientLight,
    createDirectionalLight,
    animate,
};