import scene from "../basic/Scene.js";
import sky from "../basic/shapes/Sky.js";

class RayCasterController {
    constructor() {
        this.state = null
        this.raycaster = new THREE.Raycaster();
        this.array = []
        this.character = null
    }
    init(characterController) {
        this.state = characterController.state
        this.state['target'] = new THREE.Vector3()
    }
    setCharacter(character) {
        this.character = character
        this.array = scene.children.filter(el => {
            return el != character
        })
    }
    setCamera(camera) {
        this.camera = camera
    }

    tick() {
        this.raycaster.setFromCamera(new THREE.Vector2(), this.camera);
        const intersects = this.raycaster.intersectObjects(this.array, true)[0];
        if (intersects) {
            // this.state.target.lerp(intersects.point, .5)
            this.state.target.copy(intersects.point)
            // this.state.target.y -= .5
        }
        sky.position.copy(this.character.position)
    }
}

const rayCasterController = new RayCasterController()

export default rayCasterController

export { RayCasterController }