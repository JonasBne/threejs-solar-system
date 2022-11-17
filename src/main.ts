import './style.css'
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Sun} from "./planets/Sun";
import {starsBackgroundTexture} from "./textures";

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// resize handler
window.addEventListener('resize', () => {
    // update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // update renderer and pixel ration
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

// fullscreen handler
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        return canvas.requestFullscreen();
    }
    return document.exitFullscreen();
})

// canvas
const canvas = document.getElementsByClassName('webgl')[0] as HTMLCanvasElement;

// initiate a scene
const scene = new THREE.Scene();
scene.background = starsBackgroundTexture;

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.y = 100;
camera.position.z = 200;
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// planets
scene.add(Sun.mesh);

// scene.add(Mercury.meshParent);
// Mercury.meshParent.add(Mercury.mesh);
//
// scene.add(Jupiter.meshParent);
// Jupiter.meshParent.add(Jupiter.mesh);
//
// scene.add(Earth.meshParent);
// Earth.meshParent.add(Earth.mesh);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas
});
// add size to renderer to avoid pixelated view
renderer.setSize(window.innerWidth, window.innerHeight)

const animate = () => {
    // enable damping
    controls.update()
    // rotation of planets
    // Sun.mesh.rotation.y += 0.004;

    // Mercury.mesh.rotation.y += 0.004;
    // Jupiter.mesh.rotation.z += 0.002;
    // Earth.mesh.rotation.y += -0.002;
    // make the invisible parent of mercury rotate at a faster speed than the sun
    // so that mercury itself rotates faster around the sun, than the rotation of the sun itself
    // Mercury.meshParent.rotation.y += -0.004;
    // Jupiter.meshParent.rotation.y += 0.002;
    // Earth.meshParent.rotation.y += -0.001;
    // render scene
    renderer.render(scene, camera);
    // pass reference to itself to create infinite loop of frames
    window.requestAnimationFrame(animate);
}

animate();
