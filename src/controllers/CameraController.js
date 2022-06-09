import mouse from "../basic/Mouse.js"
import { mode } from "./ModeController.js"

class CameraController {
    constructor(peerId) {
        this.peerId = peerId
        this.character = null
        this.radio = 3 //1.75
        this.radio1 = 1 //1.75
        this.radio2 = 3 //1.75
        this.ratio = 15
        this.ahead = this.radio * this.ratio
        this.height = 1.4
        this.heightTarget = 1.2
        this.angle = 0.15 //10* (Math.PI / 2)
        this.angleSensibility = 0.02
        this.camera = null
        this.state = null
        this.target = new THREE.Vector3()
        this.x = 0
        this.y = 0
    }

    init(characterController) {
        this.character = characterController.character
        this.state = characterController.state
        this.state.target = this.target
    }

    setCamera(camera) {
        this.camera = camera
    }

    cameraPosition(position) {
        //angle
        this.camera.position.set(
            position.x - Math.sin(this.x + this.angle) * this.radio,
            position.y + this.height + (this.y / 500),
            position.z - Math.cos(this.x + this.angle) * this.radio,
        )
    }
    cameraLookAt(position) {
        //ahead
        this.target.set(
            position.x + Math.sin(this.x) * this.ahead,
            position.y + this.height - (this.y / 500) * this.ratio,
            position.z + Math.cos(this.x) * this.ahead
        )
        this.camera.lookAt(this.target)
        this.state.cRotation.y = THREE.MathUtils.lerp(this.state.cRotation.y, this.x, .1)
    }
    tick() {
        this.ahead = this.radio * this.ratio
        // if (this.state.angle.y == 1) this.angle -= this.angleSensibility
        // if (this.state.angle.y == -1) this.angle += this.angleSensibility
        this.y = THREE.MathUtils.lerp(this.y, mouse.acumulated.y, 0.1)
        this.x = THREE.MathUtils.lerp(this.x, -mouse.acumulated.x / 1000, 0.1)

        const position = this.character.position.clone()


        let radioTmp = this.state.mode == mode.SHOOTER ? 1.5 : 3
        let angleTmp = this.state.mode == mode.SHOOTER ? .45 : .15
        let heightTmp = this.state.mode == mode.SHOOTER ? 1.4 : 1.8
        this.radio = THREE.MathUtils.lerp(this.radio, radioTmp, .1)
        this.angle = THREE.MathUtils.lerp(this.angle, angleTmp, .1)
        this.height = THREE.MathUtils.lerp(this.height, heightTmp, .1)
        this.cameraPosition(position)


        this.cameraLookAt(position)


        // this.target.x = position.x + Math.sin(rotation.y) * this.ahead,
        // this.target.y = position.y - mouse.acumulated.y / 100,
        // this.target.z = position.z + Math.cos(rotation.y) * this.ahead

        // this.target.x = THREE.MathUtils.lerp(this.target.x, position.x, 0.5)
        // this.target.y = THREE.MathUtils.lerp(this.target.y, position.y + this.height, 0.5)
        // this.target.z = THREE.MathUtils.lerp(this.target.z, position.z, 0.5)

        // this.camera.lookAt(this.target)


        // console.log( Math.sin(rotation.y) * this.radio)
    }
}

const cameraController = new CameraController()

export default cameraController

export { CameraController }