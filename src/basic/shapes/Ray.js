const redMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const ray = () => {
    const geometry = new THREE.BoxGeometry(.05, .05, 100);
    const rayVisible = new THREE.Mesh(geometry, whiteMaterial);
    const ray = new THREE.Group();

    rayVisible.position.z = 50
    ray.add(rayVisible)
    ray.visible = false
    return ray
}
export default ray

export { redMaterial, whiteMaterial }
