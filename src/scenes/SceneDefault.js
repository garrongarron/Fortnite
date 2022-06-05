import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import resize from "../basic/Resize.js";
import scene from "../basic/Scene.js";
import cube from "../basic/shapes/Cube.js";
// import getAgentPeely from "../models/characters/AgentPeely/AgentPeely.js";
// import getRebirth from "../models/characters/Rebirth/Rebirth.js";//ok
// import getSkullTrooper from "../models/characters/SkullTrooper/SkullTrooper.js";//ok
import getAgentJones from "../models/characters/AgentJones/AgentJones.js";//ok
import characterSelector from "../UI/CharacterSelector.js";
// import plane from "../basic/shapes/Plane.js";


class SceneDefault {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        document.addEventListener('click', this.next)
        // scene.add(plane);
        scene.add(cube);
        characterSelector.start()
        loopMachine.addCallback(() => {
            cube.rotation.y += 0.01;

        })
        getAgentJones().then(model => {
            scene.add(model);
        })
        scene.add(light);
        loopMachine.addCallback(this.render);
        loopMachine.start()
        const displacement = -.5
        camera.position.set(displacement, 2, 4);
        camera.lookAt(displacement, 1, 0);
        resize.start(renderer);
        var elem = document.querySelector("body");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
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

export default SceneDefault