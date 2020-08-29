const { ClashOfClansMemberData } = require('../models')
const { getClanMemberData } = require('../lib/getClanMemberData')
const ClashServiceAPI = require('../services/ClashService')

let insertAllClanMemberData = async () => {
    let getMembers = await getClanMemberData()
    let members = getMembers.memberList

    for (let i = 0; i < members.length; i++) {
        let id = members[i].tag
        //let url = `players/%23${id.replace(/^#+/i, '')}`
        let json = await new ClashServiceAPI(`players/%23${id.replace(/^#+/i, '')}`).clashAPI()

        insertData(json.tag, json.name, json.role, json.trophies, json.donations, json.donationsReceived)
    }
}

let insertData = (memberId, name, role, trophies, donationSent, donationReceived) => {

    ClashOfClansMemberData.findOrCreate({
        where: {
            memberId: memberId
        }
    }).then(() => {
        return ClashOfClansMemberData.findOne({
            where: { memberId: memberId }
        }).then((ClashOfClansMemberData) => {
            return ClashOfClansMemberData.update({ memberId, name, role, trophies, donationSent, donationReceived })
        })
    })
}

module.exports = insertAllClanMemberData