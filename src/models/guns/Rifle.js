import cube from "../../basic/shapes/Cube.js"

const clone = cube.clone()
// clone.scale.set(.2,.2,  1)
clone.scale.set(.05,.05, .5)

const rifle = new THREE.Group()
rifle.add(clone)
// clone.rotation.y = (Math.PI / 180)*15
// clone.rotation.x = -(Math.PI / 180)*4
clone.position.set(0,.05,.15)
// clone.position.set(.05,0,.25)
export default rifle