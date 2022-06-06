import eventBus from "../basic/EventBus.js"
import keyCode from "../basic/KeyCode.js"
import keyListener from "../basic/KeyListener.js"
import nick from "../services/nick.js"
import { mode } from "./ModeController.js"

class KeyController{
    constructor(peerId){
        this.peerId = peerId
        this.state = null
        if (this.peerId == nick) {
            keyListener.setCaster((params) => {
                eventBus.dispatch('keyListener', params)
            })
            eventBus.subscribe('keyListener', (params) => {
                const [keyCode, flag, keys] = params
                console.log(params);
                // broadcaster.send({ keyListenerEvent: { keyCode, flag, keys } })
            })
        } else {
            // this.keyListener.start()
            // keyListener.setCaster(() => { })
        }
    }
    init(characterController){
        this.state = characterController.state
        this.state['translation'] = { x: 0, y: 0 }
        this.state['rotation'] = { y: 0 }
        this.state['angle'] = { y: 0 }
        this.state['mode'] = mode.IDLE
    }
    tick(){
        this.state.translation.x = 0
        this.state.translation.y = 0
        this.state.rotation.y = 0
        this.state.angle.y = 0
        this.state.mode = mode.IDLE
        if (keyListener.isPressed(keyCode.KEY_W)) this.state.translation.y = 1
        if (keyListener.isPressed(keyCode.KEY_S)) this.state.translation.y = -1
        // if (keyListener.isPressed(keyCode.KEY_A)) this.state.rotation.y = 1
        // if (keyListener.isPressed(keyCode.KEY_D)) this.state.rotation.y = -1

        if (keyListener.isPressed(keyCode.KEY_A)) this.state.angle.y = 1
        if (keyListener.isPressed(keyCode.KEY_D)) this.state.angle.y = -1
        // if (keyListener.isPressed(keyCode.LEFT_ARROW)) this.state.angle.y = 1
        // if (keyListener.isPressed(keyCode.RIGHT_ARROW)) this.state.angle.y = -1
        if (keyListener.isPressed(keyCode.SHIFT)) this.state.mode = mode.SHOOTER
    }
}

const keyController = new KeyController()

export default keyController

export { KeyController }