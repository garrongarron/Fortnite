class SceneHandler {
    constructor(sceneList = {}) {
        this.prev = null
        this.sceneList = sceneList
    }
    setSceneList(sceneList){
        this.sceneList = sceneList
        return this
    }
    goTo(sceneName) {
        if (this.prev != null) {
            console.log('scene closing', this.prev.constructor.name);
            this.prev.close()
        }
        this.sceneList[sceneName].then(scene => {
            scene.open(this)
            console.log('scene loaded', scene.constructor.name);
            this.prev = scene
        })
    }
}
const sceneHandler = new SceneHandler()
export default sceneHandler
export { SceneHandler }