import camera from "../basic/Camera.js";
import keyListener from "../basic/KeyListener.js";
import mouse from "../basic/Mouse.js";
import { canvas } from "../basic/Renderer.js";
import { CharacterController } from "../controllers/CharacterController.js"
import { KeyController } from "../controllers/KeyController.js";
import { MouseController } from "../controllers/MouseController.js";
import { MoveController } from "../controllers/MoveController.js";
import nick from "../services/nick.js";

class ControllerBuilder {
    constructor() {

    }
    start(model) {
        this.characterController = new CharacterController();
        this.characterController.addCharacter(model);
        this.characterController.addController(new KeyController(nick))
        const mc = new MouseController(nick)
        mc.setCamera(camera)
        this.characterController.addController(mc)
        this.characterController.addController(new MoveController(nick))
        this.characterController.start();
        keyListener.start();
        mouse.setCanvas(canvas)
        mouse.start();
    }
}

const controllerBuilder = new ControllerBuilder()


export { ControllerBuilder }
export default controllerBuilder