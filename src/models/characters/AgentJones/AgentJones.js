
import AnimationLoader from "../../../basic/animations/AnimationLoader.js";
import PromiseLoader from "../../../basic/PromiseLoader.js";
import fileList from "./FileList.js";


const folder = 'src/models/characters/AgentJones/'

const urlAnimations = {}
for (const [key, value] of Object.entries(fileList)) {
    urlAnimations[key] = folder + 'animations/' + value
}

const urlModel = folder + 'animations/agentejones.fbx'

const getAgentJones = () => {
    const animationLoader = new AnimationLoader(urlModel, urlAnimations)
    const promiseLoader = new PromiseLoader(THREE.FBXLoader, function (object) {
        const scale = .005
        object.scale.set(scale, scale, scale)
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        object.castShadow = true;
        object.receiveShadow = true;
        return object
    })
    animationLoader.addPromiseLoader(promiseLoader)
    return animationLoader.getModelWithAnimations() //promise
}

export default getAgentJones
