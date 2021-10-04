import {User} from "../globalTypes";

const getUsersById = (userId: string) => {
    const userPool:{ [index: string] : User } = {
        "21-00000": {
            userId: "21-00000",
            firstName: "Austin",
            lastName: "Jones",
            joined: "09/11/2021"
        },
        "21-00001": {
            userId: "21-00001",
            firstName: "Heath",
            lastName: "Strassman",
            joined: "09/11/2021"
        },
        "21-00002": {
            userId: "21-00002",
            firstName: "Mark",
            lastName: "Meredith",
            joined: "09/11/2021"
        },
        "21-00003": {
            userId: "21-00003",
            firstName: "Matt",
            lastName: "Hack",
            joined: "09/11/2021"
        },
        "21-00004": {
            userId: "21-00004",
            firstName: "Morgan",
            lastName: "Jones",
            joined: "09/11/2021"
        },
        "21-00005": {
            userId: "21-00005",
            firstName: "Olaf",
            lastName: "Schweinsberg",
            joined: "09/11/2021"
        },
        "21-00006": {
            userId: "21-00006",
            firstName: "Zack",
            lastName: "Yanello",
            joined: "09/11/2021"
        }
    }
    return userPool[userId] || null;
}

export default getUsersById;
