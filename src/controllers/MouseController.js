import mouse from "../basic/Mouse.js"

class MouseController{
    constructor(peerId){
        this.peerId = peerId
        this.cRotation = null
        this.speed = .005
        this.camera = null
    }
    init(characterController){
        this.cRotation = characterController.character.rotation
    }
    setCamera(camera){
        this.camera = camera
    }
    tick(){
        this.cRotation.y = -mouse.acumulated.x * this.speed 
    }
}

const mouseController = new MouseController()

export default mouseController

export { MouseController }