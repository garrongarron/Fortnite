import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import resize from "../basic/Resize.js";
import scene from "../basic/Scene.js";
import cube from "../basic/shapes/Cube.js";
// import plane from "../basic/shapes/Plane.js";


class SceneDefault {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        document.addEventListener('click', this.next)
        // scene.add(plane);
        scene.add(cube);
        loopMachine.addCallback(()=>{
            cube.rotation.y += 0.01;

        })
        scene.add(light);
        loopMachine.addCallback(this.render);
        loopMachine.start()
        camera.position.set(0, 2, 5);
        camera.lookAt(0, 0, 0);
        resize.start(renderer);
    }
    render = () => {
        renderer.render(scene, camera)
    }
    next = () => {
        this.sceneHandler.goTo('menu')
    }
    close() {
        document.removeEventListener('click', this.next)
        console.log('hola stop()');
        scene.remove(plane);
        scene.remove(light);
        loopMachine.removeCallback(this.render)
        loopMachine.stop()
    }
}

export default SceneDefault