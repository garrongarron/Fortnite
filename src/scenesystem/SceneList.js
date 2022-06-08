import lazyLoad from "../basic/LazyLoad.js"
import domain from "../domain.js"

const scenesFolder = domain + "/src/scenes"

let sceneList = {
    get 'default'() { return lazyLoad(scenesFolder + '/SceneDefault.js') },
    get 'game'() { return lazyLoad(scenesFolder + '/GameScene.js') },
    get 'test'() { return lazyLoad(scenesFolder + '/Test.js') },
    
}
export default sceneList



