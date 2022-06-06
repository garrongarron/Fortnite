import terrainSystem from "../../basic/terrain/TerrainSystem.js";
import fileList from "./FileList.js";

let treesPrefavGroup = new THREE.Group()
let finalTrees = new THREE.Group()
const radio = 50;
const quantity = 50
let data = JSON.parse(localStorage.getItem('trees') || 'null')

let loadTrees = (scene) => {
    if (treesPrefavGroup.children.length > 0) return
    let load = () => {
        //there are 6 trees
        treesPrefavGroup.children = treesPrefavGroup.children.map(object => {
            let scale = 0.03
            object.scale.set(scale, scale, scale)
            object.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            return object
        });

        // console.log(data)
        if (data == null) {
            data = {}
            for (let index = 0; index < quantity; index++) {
                let type = Math.floor(Math.random() * treesPrefavGroup.children.length)
                // type = 0
                const pos = `tree-${index}-${type}`
                data[pos] = {
                    x: Math.random() * radio - radio / 2,
                    y: -1,
                    z: Math.random() * radio - radio / 2
                }
                data[pos].y = terrainSystem.customNoiseGenerator(data[pos].x, - data[pos].z)
            }
            // localStorage.setItem('trees', JSON.stringify(data))
        }
        const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

        Object.keys(data).forEach(key => {
            const lod = new THREE.LOD();
            lod.position.x = data[key].x;
            lod.position.y = data[key].y;
            lod.position.z = data[key].z;
            // lod.addLevel(treesPrefavGroup.children[1].clone(), 20);
            lod.addLevel(treesPrefavGroup.children[0].clone(), 10);
            finalTrees.add(lod)

        })
        scene.add(finalTrees)
    }

    const loader = new THREE.FBXLoader();
    let promises = []
    for (let index = 0; index < fileList.length; index++) {
        promises[index] = new Promise((resolve, reject) => {
            loader.load('src/models/Tress/' + fileList[index] + '_1.fbx', function (object) {
                resolve(object)
            })
        })
    }
    Promise.all(promises).then((a) => {
        a.forEach(object => {
            treesPrefavGroup.add(object);
        })
        load()
    })
}
export default loadTrees