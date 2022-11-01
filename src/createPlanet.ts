import * as THREE from "three";

export const createPlanet = (size: number, color: string, position?: { x?: number, y?: number, z?: number}) => {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({color});
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(position?.x || 0, position?.y || 0, position?.z || 0);

    const meshParent = new THREE.Object3D();

    return {
        meshParent,
        mesh
    }
}
