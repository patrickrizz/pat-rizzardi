const { getClanMemberData } = require("../lib/getClanMemberData");
const { clashNav } = require('../public/nav');
const { ClashOfClansMemberData } = require("../models");

class ClashRouteService {
    constructor() {
        this._logo = 'images/icons/clash-logo.png'
    }

    async params() {
        let clanMemberData = await getClanMemberData()
        let membersData = await clanMemberData.memberList
        let clashOfClansMemberData = await ClashOfClansMemberData.findAll()
        return {
            clan: await clanMemberData,
            members: membersData,
            stats: clashOfClansMemberData,
            logo: this._logo,
            nav: clashNav,
            projects: ''
        }
    }

}

module.exports = ClashRouteService;