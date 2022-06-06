import TransitionHandler from "../basic/animations/TransitionHandler.js"
import { mode } from "./ModeController.js"


class AnimationController{
    constructor() {
        this.state = null
        this.trnasitionHandler = null
    }
    init(characterController) { 
        this.state = characterController.state
        if(!this.trnasitionHandler){
            this.trnasitionHandler = new TransitionHandler(characterController.character)
        }
        this.trnasitionHandler.start()
    }
    stop(){
        this.trnasitionHandler.stop()
    }
    tick() { 
        if(this.state.mode == mode.IDLE){
            if (this.state.translation.y == 1){// console.log('2 adelante');
                this.trnasitionHandler.action(5)
            } else if (this.state.translation.y == -1){// console.log('1 atras');
                this.trnasitionHandler.action(6)
            } else {// console.log('0 quieto');
                this.trnasitionHandler.action(4)
            }
        }
        if(this.state.mode == mode.SHOOTER){
            if (this.state.translation.y == 1){// console.log('2 adelante');
                this.trnasitionHandler.action(1)
            } else if (this.state.translation.y == -1){// console.log('1 atras');
                this.trnasitionHandler.action(2)
            } else {// console.log('0 quieto');
                this.trnasitionHandler.action(3)
            }
        }
    }
}

const animationController = new AnimationController()

export default animationController

export { AnimationController }