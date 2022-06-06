import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import scene from "../basic/Scene.js";
import cube from "../basic/shapes/Cube.js";
import terrain from "../basic/terrain/Terrain.js";
import controllerBuilder from "../game/ControllerBuilder.js";
import player from "../game/Player.js";


class GameScene {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        document.addEventListener('click', this.next)
        // scene.add(plane);
        scene.add(cube);
        loopMachine.addCallback(() => {
            cube.rotation.y += 0.01;
        })
        terrain.start(scene)
        scene.add(light);
        loopMachine.addCallback(this.render);
        loopMachine.start()
        const displacement = -.5
        camera.position.set(displacement, 2, 4);
        camera.lookAt(displacement, 1, 0);
        player.getPromise().then(model => {
            controllerBuilder.start(model)
        })
    }
    render = () => {
        renderer.render(scene, camera)
    }
    next = () => {
        // this.sceneHandler.goTo('menu')
    }
    close() {
        document.removeEventListener('click', this.next)
        // scene.remove(plane);
        scene.remove(light);
        loopMachine.removeCallback(this.render)
        loopMachine.stop()
    }
}

export default GameScene