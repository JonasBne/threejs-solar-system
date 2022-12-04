import * as THREE from 'three';
import { Texture } from 'three';

interface IProps {
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  size: number;
  texture: Texture;
}

export const createPlanet = ({ position, size, texture }: IProps) => {
  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshStandardMaterial({ map: texture });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(position?.x || 0, position?.y || 0, position?.z || 0);

  const meshParent = new THREE.Object3D();

  return {
    meshParent,
    mesh,
  };
};
