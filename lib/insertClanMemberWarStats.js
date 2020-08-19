const { ClashOfClansMemberData } = require('../db/models')
const ClashServiceAPI = require('../services/ClashService')

const insertClanMemberWarStats = async () => {
    let json = await new ClashServiceAPI("clans/%23GYQG2ULQ/currentwar").clashAPI()
    let members = json.clan.members

    for (let i = 0; i < members.length; i++) {
        let memberId = members[i].tag
        let dbData = await ClashOfClansMemberData.findAll({ where: { memberId: memberId } })
        let numOfAttacks = members[i].attacks

        if (numOfAttacks === undefined) { numOfAttacks = 0 } else { numOfAttacks = members[i].attacks.length + dbData[0].numOfAttacks }
        if (memberId) { numOfWars = 1 + dbData[0].numOfWars }

        insertData(memberId, numOfAttacks, numOfWars)
        createAverageData()
    }
}

let insertData = (memberId, numOfAttacks, numOfWars) => {

    ClashOfClansMemberData.findOrCreate({
        where: {
            memberId: memberId
        }
    }).then(() => {
        return ClashOfClansMemberData.findOne({
            where: { memberId: memberId }
        }).then((ClashOfClansMemberData) => {
            return ClashOfClansMemberData.update({ numOfAttacks, numOfWars })
        })
    })
}

let createAverageData = async () => {
    let data = await ClashOfClansMemberData.findAll()

    for (let i = 0; i < data.length; i++) {
        let numOfAttacks = data[i].numOfAttacks
        let numOfWars = data[i].numOfWars
        let numOfStars = data[i].numOfStars
        let memberId = data[i].memberId

        let avgAttackRate = ((numOfAttacks * 0.5) / numOfWars) * 100
        let avgStarRate = ((numOfWars * 6) / numOfStars) * 100
        if (avgStarRate === Infinity || !avgStarRate) { avgStarRate = 0 }
        if (avgAttackRate === Infinity || !avgAttackRate) { avgAttackRate = 0 }

        ClashOfClansMemberData.findOne({
            where: { memberId: memberId }
        }).then(ClashOfClansMemberData => ClashOfClansMemberData.update({ avgAttackRate, avgStarRate }))
    }
}

module.exports = insertClanMemberWarStats