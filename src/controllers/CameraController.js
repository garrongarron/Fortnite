import mouse from "../basic/Mouse.js"

class CameraController {
    constructor(peerId) {
        this.peerId = peerId
        this.character = null
        this.radio = 3 //1.75
        this.height = 1.5
        this.heightTarget = 1.2
        this.angle = 0.15 //10* (Math.PI / 2)
        this.angleSensibility = 0.02
        this.ahead = 20
        this.camera = null
        this.state = null
        this.target = new THREE.Vector3()
        this.x = 0
        this.y = 0
    }

    init(characterController) {
        this.character = characterController.character
        this.state = characterController.state
    }

    setCamera(camera) {
        this.camera = camera
    }

    cameraPosition(position) {
        //angle
        this.camera.position.set(
            position.x - Math.sin(this.x + this.angle) * this.radio,
            position.y + this.height + this.y / 500,
            position.z - Math.cos(this.x + this.angle) * this.radio,
        )
    }
    cameraLookAt(position) {
        //ahead
        this.camera.lookAt(
            position.x + Math.sin(this.x) * this.ahead,
            position.y - this.y / 100,
            position.z + Math.cos(this.x) * this.ahead
        )
        if (this.state.translation.y == 1) {
            this.state.cRotation.y = THREE.MathUtils.lerp(this.state.cRotation.y, this.x, .1)
        }
    }
    tick() {

        // if (this.state.angle.y == 1) this.angle -= this.angleSensibility
        // if (this.state.angle.y == -1) this.angle += this.angleSensibility
        this.y = THREE.MathUtils.lerp(this.y, mouse.acumulated.y, 0.3)
        this.x = THREE.MathUtils.lerp(this.x, -mouse.acumulated.x / 1000, 0.3)

        const position = this.character.position.clone()

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