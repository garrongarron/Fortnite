class Player{
    constructor(){
        this.resolve = null
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve
        })
    }
    setPlayer(model){
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
