import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import resize from "../basic/Resize.js";
import scene from "../basic/Scene.js";
import rifle from "../models/guns/Rifle.js";

class SceneDefault {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        scene.add(light);
        scene.add(rifle);
        loopMachine.addCallback(this.render);
        loopMachine.start()
        camera.position.set(0, 2, 4);
        camera.lookAt(0, 1, 0);
        resize.start(renderer);
    }
    render = () => {
        rifle.rotation.y += .01;
        renderer.render(scene, camera)
    }
    next = () => {
        // this.sceneHandler.goTo('menu')
    }
    close() {

    }
}

export default SceneDefault