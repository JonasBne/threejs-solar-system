import {createPlanet} from "../utils/createPlanet";
import {earthTexture} from "../textures";

export const Earth = createPlanet({ position: { x: 0, y: 10, z: -100 },  size: 9, texture: earthTexture})
