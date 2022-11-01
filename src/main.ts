import './style.css'
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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
const sunGeo = new THREE.SphereGeometry(16, 32, 32);
const sunMat = new THREE.MeshBasicMaterial({color: 'yellow'});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const mercuryGeo = new THREE.SphereGeometry(4, 32, 32);
const mercuryMat = new THREE.MeshBasicMaterial({color: 'green'});
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
// change default position because it is hidden behind the sun
mercury.position.x = 20;
mercury.position.z = 10;

// invisible parent object at same position as sun
// to allow for children elements to rotate at a different speed (instead of adding them as children of the sun mesh)
const mercuryParent = new THREE.Object3D();
scene.add(mercuryParent);
mercuryParent.add(mercury);

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
    sun.rotation.y += 0.004;
    mercury.rotation.y += 0.004;
    mercuryParent.rotation.y += 0.03;
    // render scene
    renderer.render(scene, camera);
    // pass reference to itself to create infinite loop of frames
    window.requestAnimationFrame(animate);
}

animate();
