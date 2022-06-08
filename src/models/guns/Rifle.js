import bullet from "../../basic/shapes/Bullet.js"
import cube from "../../basic/shapes/Cube.js"

const cubeClone = cube.clone()
// clone.scale.set(.2,.2,  1)


const bulletClone = bullet.clone()
bulletClone.name = 'spawner'



const rifle = new THREE.Group()
rifle.add(cubeClone)
rifle.add(bulletClone)
cubeClone.scale.set(.05,.05, .5)
cubeClone.position.set(0,.05,.15)
bulletClone.position.set(0,.06,.5)

export default rifle