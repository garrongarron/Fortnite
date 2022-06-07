import camera from "../../basic/Camera.js"
import loopMachine from "../../basic/LoopMachine.js"
import scene from "../../basic/Scene.js"
import characters from "../../game/Characters.js"
import player from "../../game/Player.js"
import sceneHandler from "../../scenesystem/SceneHandler.js"
import sounds from "../../sounds/Audios.js"

class CharacterSelector {
    constructor() {
        this.node = null
        this.promise = fetch('src/UI/characterselector/CharacterSelector.html').then(response => response.text())
        this.promise.then(html => {
            this.node = document.createElement('div')
            this.node.innerHTML = html
            this.node.style.display = 'none'
            this.node.querySelector('button').style.display = 'none'
            document.body.appendChild(this.node)
        })
        this.characterContainer = null
    }
    cameraSpinOut = () =>{
        camera.rotation.y += 0.05
        if(camera.rotation.y >= Math.PI/2 ){
            loopMachine.removeCallback(this.cameraSpinOut)
            this.loadCharacter()
            camera.rotation.y  = -Math.PI*1.75
        }
    }
    cameraSpinIn = () =>{
        camera.rotation.y -= 0.03
        if(camera.rotation.y <= -Math.PI *2){
            loopMachine.removeCallback(this.cameraSpinIn)
            camera.rotation.y = 0
            sounds.play('getGun')
            this.node.querySelector('button').style.display = 'block'
        }
    }
    loadCharacter(){
        this.characterContainer.getter().then(model => {
            scene.add(model);
            model.name = this.characterContainer.name
            player.setPlayer(model)
            loopMachine.addCallback(this.cameraSpinIn)
        })
    }
    start() {
        this.promise.then(() => {
            this.node.querySelector('ul').innerHTML = ''
            Object.entries(characters).forEach(character => {
                const li = document.createElement('li')
                li.innerHTML = character[1].name
                li.style.backgroundImage = `url(src/game/characters/${character[0]}.png)`
                li.addEventListener('click', () => {
                    sounds.play('getGun')
                    this.characterContainer = character[1]
                    this.node.querySelector('button').style.display = 'none'
                    loopMachine.addCallback(this.cameraSpinOut)
                })
                this.node.querySelector('ul').append(li)
            })
            this.node.querySelector('button').addEventListener('click', () => {
                sceneHandler.goTo('game')
            })
            
            this.node.style.display = 'block'
        })
        return this.promise
    }
    stop(){
        this.node.style.display = 'none'
    }
}

const  characterSelector = new CharacterSelector()

export default characterSelector

export { CharacterSelector }