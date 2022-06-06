import mouse from "../basic/Mouse.js"

class CameraController {
    constructor() {
        this.character = null
        this.radio = 2 //1.75
        this.height = 1.5
        this.heightTarget = 1.2
        this.angle = 1
        this.angleSensibility = 0.1
        this.ahead = 20
        this.camera = null
        this.state = null
    }
    init(characterController) {
        this.character = characterController.character
        this.state = characterController.state
    }
    setCamera(camera) {
        this.camera = camera
    }
    tick() {

        if (this.state.angle.y == 1) this.angle -= this.angleSensibility
        if (this.state.angle.y == -1) this.angle += this.angleSensibility

        const rotation = this.character.rotation
        const position = this.character.position.clone()
        this.camera.position.set(
            position.x - Math.sin(rotation.y + this.angle) * this.radio,
            position.y + this.height,
            position.z - Math.cos(rotation.y + this.angle) * this.radio,
        )
        // this.camera.lookAt(
        //     position.x + Math.sin(rotation.y) * this.ahead,
        //     position.y - mouse.acumulated.y / 100,
        //     position.z + Math.cos(rotation.y) * this.ahead
        // )
        this.camera.lookAt(
            position.x, //+ Math.sin(rotation.y) * this.ahead,
            position.y - mouse.acumulated.y / 100,
            position.z,// + Math.cos(rotation.y) * this.ahead
        )
        // console.log( Math.sin(rotation.y) * this.radio)
    }
}

const cameraController = new CameraController()

export default cameraController

export { CameraController }