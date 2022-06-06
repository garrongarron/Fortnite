import sounds from "../sounds/Audios.js";
import eventBus from "../basic/EventBus.js";
import scene from "../basic/Scene.js";
import square from "../basic/shapes/Square.js";
import terrainSystem from "../basic/terrain/TerrainSystem.js";
import inventoryHandler from "../UI/inventory/InventoryHandler.js";

class CollectableSystem {
    constructor() {
        this.collisionables = [];
        this.group = new THREE.Group();
        this.loaded = false
    }
    start() {
        if (this.loaded) return this.group
        for (let index = 0; index < 1; index++) {
            this.collisionables[index] = square.clone()
            this.collisionables[index].position.x = index * 5 + 1
            this.collisionables[index].position.z = index * 5 + 1
            this.collisionables[index].position.y = terrainSystem.customNoiseGenerator(index * 5, -index * 5)
            this.collisionables[index].name = "gun"
            this.group.add(this.collisionables[index])
        }
        scene.add(this.group)
        this.loaded = true
        eventBus.subscribe('collectable', (obj) => {
            if (obj.name == 'gun') {
                this.group.remove(obj)
                sounds.play('getGun')
                inventoryHandler.slots['slot-1'].style = "background-image: url('src/UI/inventory/img/1.png')" ;
            }
        })
        return this.group

    }
    stop() {

    }
}

const collectableSystem = new CollectableSystem()

export default collectableSystem

export { CollectableSystem }