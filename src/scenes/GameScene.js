import cache from "../basic/Cache.js";
import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import scene from "../basic/Scene.js";
import cube from "../basic/shapes/Cube.js";
import Stats from "../basic/Stats.js";
import terrain from "../basic/terrain/Terrain.js";
import collectableSystem from "../game/CollectableSystem.js";
import controllerBuilder from "../game/ControllerBuilder.js";
import player from "../game/Player.js";
import loadTrees from "../models/Tress/TreeSpawner.js";
import inventoryHandler from "../UI/inventory/InventoryHandler.js";


class GameScene {
    constructor(){
        this.stats = new Stats();
    }
    open(sceneHandler) {
        document.body.appendChild(this.stats.dom);
        this.sceneHandler = sceneHandler
        document.addEventListener('click', this.next)
        // scene.add(plane);
        scene.add(cube);
        loopMachine.addCallback(() => {
            cube.rotation.y += 0.01;
        })
        terrain.start(scene)
        scene.add(light);
        loadTrees(scene);
        loopMachine.addCallback(this.render);
        loopMachine.start()
        inventoryHandler.start()
        collectableSystem.start()
        controllerBuilder.start(player.getPlayer())
    }
    render = () => {
        this.stats.update();
        renderer.render(scene, camera)
    }
    next = () => {
        // this.sceneHandler.goTo('menu')
    }
    close() {
        document.removeEventListener('click', this.next)
        // scene.remove(plane);
        cache.appendChild(stats.dom)
        scene.remove(light);
        loopMachine.removeCallback(this.render)
        loopMachine.stop()
    }
}

export default GameScene