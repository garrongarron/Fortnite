const geometry = new THREE.CylinderGeometry( .5,.5, .2, 18 );
const material = new THREE.MeshPhongMaterial( { color: 0x4c51f7 } );
const cylinder = new THREE.Mesh( geometry, material );

export default cylinder