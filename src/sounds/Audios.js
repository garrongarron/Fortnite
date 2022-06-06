import Sound from "../basic/Sound.js"

const soundFolder = "src/sounds/"

const soundLIst = {
    background:'heavens_forbid.ogg',
    fire:'gun_fire.mp3',
    impact:'gun_impact.mp3',
    getGun:'get_gun.mp3',
}

const urlSounds = {}
Object.entries(soundLIst).forEach(sound => {
    urlSounds[sound[0]] = soundFolder + sound[1]
})
console.log(urlSounds)
const sounds = new Sound(urlSounds)

export default sounds