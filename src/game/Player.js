import scene from "../basic/Scene.js"

class Player{
    constructor(){
        this.resolve = null
        this.model = null
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve
        })
    }
    setPlayer(model){
        if(this.model){
            scene.remove(this.model)
        }
        this.model = model
        this.resolve(model)
    }
    getPlayer(){
        return this.model
    }
    getPromise(){
        return this.promise
    }
}

const player = new Player()

export default player
