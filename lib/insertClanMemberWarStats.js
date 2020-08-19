const db = require('../db/models')
const ClashServiceAPI = require('../services/ClashService')

const insertClanMemberWarStats = async () => {
    let json = await new ClashServiceAPI("clans/%23GYQG2ULQ/currentwar").clashAPI()   
    let members = json.clan.members

    for (let i = 0; i < members.length; i++) {
        let memberId = await members[i].tag
        let dbData = await db.ClashOfClansMemberData.findAll({ where: { memberId: memberId } })
        let numOfAttacks = await members[i].attacks

        if (numOfAttacks === undefined) { numOfAttacks = 0 } else { numOfAttacks = members[i].attacks.length + dbData[0].numOfAttacks }
        if (memberId) { numOfWars = 1 + dbData[0].numOfWars }

        insertData(memberId, numOfAttacks, numOfWars)
    }
}

let insertData = (memberId, numOfAttacks, numOfWars) => {

    db.ClashOfClansMemberData.findOrCreate({
        where: {
            memberId: memberId
        }
    }).then(() => {
        return db.ClashOfClansMemberData.findOne({
            where: { memberId: memberId }
        }).then((ClashOfClansMemberData) => {
            return ClashOfClansMemberData.update({ numOfAttacks, numOfWars })
        })
    })
}

module.exports = insertClanMemberWarStats