import {createPlanet} from "../utils/createPlanet";
import {saturnRingTexture, saturnTexture} from "../textures";
import * as THREE from "three";

export const Saturn = createPlanet({ position: { x: 100, y: 100, z: -1200 },  size: 88, texture: saturnTexture});

const ringGeometry = new THREE.RingGeometry(100, 140, 32);
const ringMaterial = new THREE.MeshBasicMaterial({ map: saturnRingTexture });
ringMaterial.side = THREE.DoubleSide;
const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
ringMesh.rotation.x = -0.5 * Math.PI;

Saturn.mesh.add(ringMesh);
