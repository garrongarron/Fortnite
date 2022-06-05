import shaders from './SkyShaders.js'

const geometry = new THREE.SphereGeometry( 500, 8, 8 );
const material = new THREE.MeshBasicMaterial( { color: 0x87CEEB , side: THREE.BackSide} );
// material.opacity = 0
// material.transparent = true
const sky = new THREE.Mesh( geometry, material );
sky.name = 'sky'
sky.layers.enable( 1 );

let sky2 =  null
let setSky = (scene) => {

    const uniforms = {
        "topColor": { value: new THREE.Color(0xb7cfe9) },//0x2471A3 //0x377C9B //0x81C1E2
        "bottomColor": { value: new THREE.Color(0x739BC5) },//0xf9cf8d //0xFB9B1A
        "offset": { value: 10 },
        "exponent": { value: 1 }
    };

    const skyGeo = new THREE.SphereGeometry(900, 32, 15);
    const skyMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: shaders._VS,
        fragmentShader: shaders._FS,
        side: THREE.BackSide
    });

    sky2 = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky2);
}
let getSky = () =>{
    return sky2
}
export default sky
export {  getSky , setSky }