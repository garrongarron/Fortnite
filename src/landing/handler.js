import sceneHandler from "../scenesystem/SceneHandler.js";
import sceneList from "../scenesystem/SceneList.js";

class Landing{
    constructor(){
        document.querySelector('.landing button').addEventListener('click', ()=>{
            this.clean()
            sceneHandler.setSceneList(sceneList)
            sceneHandler.goTo('default')//test
        })
    }
    clean(){
        const landing = document.querySelector('.landing')
        landing.parentNode.removeChild(landing);
    }
}

export default Landing;