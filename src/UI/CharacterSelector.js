import characters from "../game/Characters.js"
import sceneHandler from "../scenesystem/SceneHandler.js"

class CharacterSelector {
    constructor() {
        this.node = null
        this.promise = fetch('src/UI/CharacterSelector.html').then(response => response.text())
        this.promise.then(html => {
            this.node = document.createElement('div')
            this.node.innerHTML = html
            this.node.style.display = 'none'
            document.body.appendChild(this.node)
        })
    }
    start() {
        this.promise.then(() => {
            this.node.querySelector('ul').innerHTML = ''
            Object.entries(characters).forEach(character => {
                const li = document.createElement('li')
                li.innerHTML = character[1].name
                li.style.backgroundImage = `url(src/game/characters/${character[0]}.png)`
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