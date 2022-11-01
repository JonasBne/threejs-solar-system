import './style.css'
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {createPlanet} from "./createPlanet";

// canvas
const canvas = document.getElementsByClassName('webgl')[0] as HTMLCanvasElement;

// initiate a scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 100;
camera.position.z = 120;
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// planets
const sun = createPlanet(16, 'yellow');
scene.add(sun.mesh);

const mercury = createPlanet(4, 'green', { x: 20, y: 0, z: 10 });
scene.add(mercury.meshParent);
mercury.meshParent.add(mercury.mesh);

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
    sun.mesh.rotation.y += 0.004;

    mercury.mesh.rotation.y += 0.004;
    // make the invisible parent of mercury rotate at a faster speed than the sun
    // so that mercury itself rotates faster around the sun, than the rotation of the sun itself
    mercury.meshParent.rotation.y += 0.03;
    // render scene
    renderer.render(scene, camera);
    // pass reference to itself to create infinite loop of frames
    window.requestAnimationFrame(animate);
}

animate();
