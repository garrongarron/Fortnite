import getAgentJones from "../models/characters/AgentJones/AgentJones.js"
import getAgentPeely from "../models/characters/AgentPeely/AgentPeely.js"
import getRebirth from "../models/characters/Rebirth/Rebirth.js"
import getSkullTrooper from "../models/characters/SkullTrooper/SkullTrooper.js"

const characters = {
    AgentJones: {
        name: "Agent Jones",
        getter: getAgentJones
    },
    AgentPeely: {
        name: "Agent Peely",
        getter: getAgentPeely
    },
    Rebirth:{
        name: "Rebirth",
        getter: getRebirth
    },
    SkullTrooper: {
        name: "Skull Trooper",
        getter: getSkullTrooper
    }
}
export default characters
