import * as THREE from "three";

interface IProps {
    color?: string;
    position?: {
      x?: number;
      y?: number;
      z?: number;
    };
    size: number;
    texture?: string;
}

const textureLoader = new THREE.TextureLoader();

export const createPlanet = ({color, position, size, texture}: IProps) => {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({color, map: texture ? textureLoader.load(texture) : null});
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(position?.x || 0, position?.y || 0, position?.z || 0);

    const meshParent = new THREE.Object3D();

    return {
        meshParent,
        mesh
    }
}
