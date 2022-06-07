import getAgentJones from "../models/characters/AgentJones/AgentJones.js"
import getAgentPeely from "../models/characters/AgentPeely/AgentPeely.js"
import getRebirth from "../models/characters/Rebirth/Rebirth.js"
import getSkullTrooper from "../models/characters/SkullTrooper/SkullTrooper.js"

const characters = {
    AgentJones: {
        name: "Agent Jones",
        getter: getAgentJones,
        rightHandName: 'mixamorigRightForeArm'
    },
    AgentPeely: {
        name: "Agent Peely",
        getter: getAgentPeely,
        rightHandName: 'mixamorigRightForeArm'
    },
    Rebirth:{
        name: "Rebirth",
        getter: getRebirth,
        rightHandName: 'mixamorigRightForeArm'
    },
    SkullTrooper: {
        name: "Skull Trooper",
        getter: getSkullTrooper,
        rightHandName: 'mixamorigRightForeArm' 
    }
}
//'mixamorigRightHand'
export default characters
