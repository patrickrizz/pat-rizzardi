const db = require('../db/models')
const { clanStats } = require('../api/handleClashData')
const fetch = require('node-fetch')

let baseUrl = process.env.CLASH_OF_CLANS_URL
let token = process.env.CLASH_OF_CLANS_TOKEN

let insertClanMemberData = async () => {
    let clan = await clanStats()
    let members = clan.memberList
    let json = []

    for (let i = 0; i < members.length; i++) {
        let id = members[i].tag
        let url = `players/%23${id.replace(/^#+/i, '')}`

        let response = await fetch(baseUrl + url, {
            headers: {
                "Accept": "application/json",
                "authorization": `Bearer ${token}`
            }
        })

        json = await response.json()
        insertData(json.tag, json.name, json.role, json.trophies, json.donations, json.donationsReceived)
    }
}

let insertData = (memberId, name, role, trophies, donationSent, donationReceived) => {

    db.ClashOfClansMemberData.findOrCreate({
        where: {
            memberId: memberId
        }
    }).then(() => {
        return db.ClashOfClansMemberData.findOne({
            where: { memberId: memberId }
        }).then((ClashOfClansMemberData) => {
            return ClashOfClansMemberData.update({ memberId, name, role, trophies, donationSent, donationReceived })
        })
    })
}

module.exports = insertClanMemberData