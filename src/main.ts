import './style.css'
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Sun} from "./planets/Sun";
import {starsBackgroundTexture} from "./textures";
/*
* full screen and resizing
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

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

/*
* canvas
 */
const canvas = document.getElementsByClassName('webgl')[0] as HTMLCanvasElement;

/*
* scene
 */
const scene = new THREE.Scene();
scene.background = starsBackgroundTexture;

/*
* camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 2000);
camera.position.z = 250;
scene.add(camera);

/*
* orbit controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/*
* planets
 */
scene.add(Sun.mesh);

// scene.add(Mercury.meshParent);
// Mercury.meshParent.add(Mercury.mesh);
//
// scene.add(Venus.meshParent);
// Venus.meshParent.add(Venus.mesh);
//
// scene.add(Earth.meshParent);
// Earth.meshParent.add(Earth.mesh);
//
// scene.add(Mars.meshParent);
// Mars.meshParent.add(Mars.mesh);
//
// scene.add(Jupiter.meshParent);
// Jupiter.meshParent.add(Jupiter.mesh);
//
// scene.add(Saturn.meshParent);
// Saturn.meshParent.add(Saturn.mesh);

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
    // Venus.mesh.rotation.y += 0.004;
    // Earth.mesh.rotation.y += 0.002;
    // Mars.mesh.rotation.y += 0.001;
    // Jupiter.mesh.rotation.y += 0.001;

    // make the invisible parent of mercury rotate at a faster speed than the sun
    // so that mercury itself rotates faster around the sun, than the rotation of the sun itself

    // Mercury.meshParent.rotation.y += 0.0088;
    // Venus.meshParent.rotation.y += 0.00225;
    // Earth.meshParent.rotation.y += 0.00365;
    // Mars.meshParent.rotation.y += 0.00182;
    // Jupiter.meshParent.rotation.y += 0.000182;
    // Saturn.meshParent.rotation.y += 0.000088;

    // render scene
    renderer.render(scene, camera);
    // pass reference to itself to create infinite loop of frames
    window.requestAnimationFrame(animate);
}

animate();
