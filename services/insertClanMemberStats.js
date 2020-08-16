const db = require('../db/models')
const fetch = require('node-fetch')

let baseUrl = process.env.CLASH_OF_CLANS_URL
let token = process.env.CLASH_OF_CLANS_TOKEN

const insertClanMemberStats = async () => {
    let url = "clans/%23GYQG2ULQ/currentwar"
    let response = await fetch(baseUrl + url, {
        headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    let json = await response.json()
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

module.exports = insertClanMemberStats