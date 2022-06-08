import getAgentJones from "../models/characters/AgentJones/AgentJones.js"
import getAgentPeely from "../models/characters/AgentPeely/AgentPeely.js"
import getRebirth from "../models/characters/Rebirth/Rebirth.js"
import getSkullTrooper from "../models/characters/SkullTrooper/SkullTrooper.js"


const rightHandName = 'mixamorigRightHandIndex2'//mixamorigRightHandIndex1
const leftHandName = 'mixamorigLeftHandIndex2'//mixamorigRightHandIndex1
const chesRotation = 15
const characters = {
    AgentJones: {
        name: "Agent Jones",
        getter: getAgentJones,
        rightHandName,
        leftHandName,
        chesRotation,
        chestName: 'mixamorigSpine1',
    },
    AgentPeely: {
        name: "Agent Peely",
        getter: getAgentPeely,
        rightHandName,
        leftHandName,
        chesRotation:60,
        chestName: 'mixamorigSpine1',
    },
    Rebirth:{
        name: "Rebirth",
        getter: getRebirth,
        rightHandName,
        leftHandName,
        chesRotation,
        chestName: 'mixamorigSpine1',
    },
    SkullTrooper: {
        name: "Skull Trooper",
        getter: getSkullTrooper,
        rightHandName,
        leftHandName,
        chesRotation,
        chestName: 'mixamorigSpine1',
    }
}
//'mixamorigRightHand'
//mixamorigRightForeArm
export default characters
