import mouse from "../basic/Mouse.js"

class CameraController {
    constructor(peerId) {
        this.peerId = peerId
        this.character = null
        this.radio = 5 //1.75
        this.height = 1.5
        this.heightTarget = 1.2
        this.angle = 0
        this.angleSensibility = 0.1
        this.ahead = 20
        this.camera = null
        this.state = null
        this.target = new THREE.Vector3()
        this.y = 0
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
        this.y = THREE.MathUtils.lerp(this.y, mouse.acumulated.y, 0.3)

        const rotation = this.character.rotation
        const position = this.character.position.clone()
        this.camera.position.set(
            position.x - Math.sin(rotation.y + this.angle) * this.radio,
            position.y + this.height + .25 + this.y / 500,
            position.z - Math.cos(rotation.y + this.angle) * this.radio,
        )
        
        // this.camera.lookAt(
        //     position.x + Math.sin(rotation.y) * this.ahead,
        //     position.y - mouse.acumulated.y / 100,
        //     position.z + Math.cos(rotation.y) * this.ahead
        // )

        
        this.target.x=  THREE.MathUtils.lerp(this.target.x, position.x, 0.5)
        this.target.y=  THREE.MathUtils.lerp(this.target.y, position.y +this.height, 0.5)
        this.target.z=  THREE.MathUtils.lerp(this.target.z, position.z, 0.5)

        this.camera.lookAt(this.target)
        // console.log( Math.sin(rotation.y) * this.radio)
    }
}

const cameraController = new CameraController()

export default cameraController

export { CameraController }