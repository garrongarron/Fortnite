import camera from "../basic/Camera.js";
import keyListener from "../basic/KeyListener.js";
import mouse from "../basic/Mouse.js";
import { canvas } from "../basic/Renderer.js";
import terrain from "../basic/terrain/Terrain.js";
import { CameraController } from "../controllers/CameraController.js";
import { CharacterController } from "../controllers/CharacterController.js"
import { GravityController } from "../controllers/GravityController.js";
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
        const cc = new CameraController(nick)
        cc.setCamera(camera)
        this.characterController.addController(cc)

        const gc = new GravityController(nick)
        setTimeout(() => {
            gc.setArray(terrain.group.children)
            console.log(terrain.group.children)
        }, 300);
        this.characterController.addController(gc)

        this.characterController.start();
        keyListener.start();
        mouse.setCanvas(canvas)
        mouse.start();
    }
}

const controllerBuilder = new ControllerBuilder()


export { ControllerBuilder }
export default controllerBuilder