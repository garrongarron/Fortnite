import characters from "../game/Characters.js"
import sounds from "../sounds/Audios.js"
import mouse from "../basic/Mouse.js"
import camera from "../basic/Camera.js"
import { mode } from "./ModeController.js"
// import ray from "../basic/shapes/Ray.js"
// import triggerBurst from "../particle-system/triggerBurst.js"
// import info from "../UI/Info.js"
// import { mode } from "./ModeController.js"



class WeaponController {
    constructor() {
        this.state = null
        this.character = null
        this.speed = .07
        this.ySensibility = 0.001
        this.rightHand = null
        this.leftHand = null
        this.chesRotation = 15
        this.ray = null
        this.n = 0
    }
    setRay(ray) {
        this.ray = ray
    }
    setWeapon(weapon) {
        this.weapon = weapon
    }

    #setRightHand() {
        const obj = Object.values(characters).filter(data => this.character.name == data.name)[0]
        const rightHandName = obj.rightHandName
        const leftHandName = obj.leftHandName
        const chestName = obj.chestName
        this.chesRotation = obj.chesRotation
        this.rightHand = this.character
        this.character.traverse((child) => {
            if (child.name == rightHandName) {
                this.rightHand = child
                console.log('rightHand', this.rightHand)
            }
            if (child.name == leftHandName) {
                this.leftHand = child
                console.log('leftHand', this.leftHand)
            }
            if (child.name == chestName) {
                this.chest = child
            }
        });
    }

    init(characterController) {
        this.state = characterController.state
        this.character = characterController.character
        // this.chest = this.character.children[0].children[0].children[0].children[0]
        this.#setRightHand()
        this.rightHand.attach(this.weapon)
        this.weapon.position.copy(this.rightHand.position)
        this.spawner = this.weapon.children[1]
        this.spawner.add(this.ray)

        document.removeEventListener('mousedown', this.shot)
        document.addEventListener('mousedown', this.shot)
        sounds.setVolume('impact', .125)
    }
    stop = () => {
        // document.removeEventListener('mousedown', this.shot)
    }

    shot = () => {
        if (this.state.mode != mode.SHOOTER) return
        sounds.play('impact')
        this.ray.visible = true
        clearTimeout(this.n)
        this.n = 0
        this.n = setTimeout(() => {
            this.ray.visible = false
            this.n = 0
        }, 100);
        // triggerBurst(this.state.target)
    }

    tick() {

        if (this.state?.target && this.state.mode == mode.SHOOTER) {
            if (this.state.translation.x != 0) {
                this.chest.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), (camera.getWorldDirection(new THREE.Vector3()).y + (10 * Math.PI / 180))*1.1)
            } else {
                this.chest.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -camera.getWorldDirection(new THREE.Vector3()).y + (0 * Math.PI / 180))
            }
            this.chest.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), this.chesRotation * Math.PI / 180)
            let v3 = new THREE.Vector3()
            this.leftHand.getWorldPosition(v3)
            this.weapon.lookAt(v3)
            this.ray?.lookAt(this.state.target)
        }
    }
}

const weaponController = new WeaponController()

export default weaponController

export { WeaponController }