import earthClouds from './earth_clouds_texture.jpeg';
import earth from './earth_texture.jpeg';
import jupiter from './jupiter_texture.jpeg';
import mars from './mars_texture.jpeg';
import mercury from './mercury_texture.jpeg';
import neptune from './neptune_texture.jpeg';
import saturnRing from './saturn_ring.png';
import saturn from './saturn_texture.jpeg';
import stars from './stars_texture.jpeg';
import sun from './sun_texture.jpeg';
import venus from './venus_texture.jpeg';
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

export const earthCloudsTexture = textureLoader.load(earthClouds);
export const earthTexture = textureLoader.load(earth);
export const jupiterTexture = textureLoader.load(jupiter);
export const marsTexture = textureLoader.load(mars);
export const mercuryTexture = textureLoader.load(mercury);
export const neptuneTexture = textureLoader.load(neptune);
export const saturnRingTexture = textureLoader.load(saturnRing);
export const saturnTexture = textureLoader.load(saturn);
export const starsBackgroundTexture = cubeTextureLoader.load([
    stars,
    stars,
    stars,
    stars,
    stars,
    stars
]);
export const sunTexture = textureLoader.load(sun);
export const venusTexture = textureLoader.load(venus);

