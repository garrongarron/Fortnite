
const loader = new THREE.CubeTextureLoader();
const imagesFolder = 'src/cubemaps/space/images/';

const files = [
    'space-posx.jpg',
    'space-negx.jpg',
    'space-posy.jpg',
    'space-negy.jpg',
    'space-posz.jpg',
    'space-negz.jpg'
]

const skyTexture = loader.load(files.map(file => imagesFolder + file));

export default skyTexture