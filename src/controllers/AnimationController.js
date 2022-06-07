import animationBehaviour from "../basic/animations/AnimationBehaviour.js"
import TransitionHandler from "../basic/animations/TransitionHandler.js"
import { mode } from "./ModeController.js"


class AnimationController {
    constructor() {
        this.state = null
        this.transitionHandler = null
    }
    init(characterController) {
        this.state = characterController.state
        if (!this.transitionHandler) {
            this.transitionHandler = new TransitionHandler(characterController.character)
        }
        this.transitionHandler.start()
    }
    stop() {
        this.transitionHandler.stop()
    }
    tick() {
        const speed = 1.2
        if (this.state.mode == mode.IDLE) {
            if (false) {
            } else if (this.state.translation.x == 1) {// console.log('2 adelante');
                this.transitionHandler.action(animationBehaviour.left, speed)
            } else if (this.state.translation.x == -1) {// console.log('1 atras');
                this.transitionHandler.action(animationBehaviour.right, speed)
            } else if (this.state.translation.y == 1) {// console.log('2 adelante');
                this.transitionHandler.action(animationBehaviour.run, speed)
            } else if (this.state.translation.y == -1) {// console.log('1 atras');
                this.transitionHandler.action(animationBehaviour.runBack, speed)
            } else {// console.log('0 quieto');
                this.transitionHandler.action(animationBehaviour.idle, speed)
            }
        }
        if (this.state.mode == mode.SHOOTER) {
            if (false) {
            } else if (this.state.translation.x == 1) {// console.log('2 adelante');
                this.transitionHandler.action(animationBehaviour.rifle_left, speed*0+1)
            } else if (this.state.translation.x == -1) {// console.log('1 atras');
                this.transitionHandler.action(animationBehaviour.rifle_right, speed*0+1)
            } else if (this.state.translation.y == 1) {// console.log('2 adelante');
                this.transitionHandler.action(animationBehaviour.rifle_run, speed)
            } else if (this.state.translation.y == -1) {// console.log('1 atras');
                this.transitionHandler.action(animationBehaviour.rifle_runBack, speed)
            } else {// console.log('0 quieto');
                this.transitionHandler.action(animationBehaviour.rifle_idle, speed)
            }
        }
    }
}

const animationController = new AnimationController()

export default animationController

export { AnimationController }