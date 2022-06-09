import getAgentJones from "../models/characters/AgentJones/AgentJones.js"
import getAgentPeely from "../models/characters/AgentPeely/AgentPeely.js"
import getRebirth from "../models/characters/Rebirth/Rebirth.js"
import getSkullTrooper from "../models/characters/SkullTrooper/SkullTrooper.js"


const rightHandName = 'mixamorigRightHandIndex2'//mixamorigRightHandIndex1
const leftHandName = 'mixamorigLeftHandIndex2'//mixamorigRightHandIndex1
const chesRotation = 0
const chestName = 'mixamorigSpine'
const characters = {
    AgentJones: {
        name: "Agent Jones",
        getter: getAgentJones,
        rightHandName,
        leftHandName,
        chesRotation:-10,
        chestName,
    },
    AgentPeely: {
        name: "Agent Peely",
        getter: getAgentPeely,
        rightHandName,
        leftHandName,
        chesRotation:-25,
        chestName,
    },
    Rebirth:{
        name: "Rebirth",
        getter: getRebirth,
        rightHandName,
        leftHandName,
        chesRotation:-10,
        chestName,
    },
    SkullTrooper: {
        name: "Skull Trooper",
        getter: getSkullTrooper,
        rightHandName,
        leftHandName,
        chesRotation:-15,
        chestName,
    }
}
//'mixamorigRightHand'
//mixamorigRightForeArm
export default characters
