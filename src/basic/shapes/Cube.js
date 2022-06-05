const geometry = new THREE.BoxGeometry( );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshPhongMaterial( { color: 0x4c51f7 } );

const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
cube.receiveShadow = true; 

export default cube