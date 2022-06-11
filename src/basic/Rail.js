import loopMachine from "./LoopMachine.js"
import scene from "./Scene.js"
import curveObject, { curve } from "./shapes/Curve.js"

class Rail {
    constructor() {
        this.time = 0
        this.prevPosition = null
        this.up = new THREE.Vector3(0, 0, 1);
    }
    start(object) {
        this.object = object
        this.prevPosition = object.position.clone()
        scene.add(curveObject)
        loopMachine.addCallback(()=>{
            this.time += .001
            if(this.time > 1) this.time = 0
            let point = curve.getPointAt(this.time);
            this.object.position.set(point.x, point.y, point.z);
            this.object.lookAt(this.prevPosition);
            this.prevPosition = object.position.clone()
        })
    }
}

const rail = new Rail()

export default rail

export { Rail }