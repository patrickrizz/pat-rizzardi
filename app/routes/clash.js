const express = require('express')
const router = express.Router()
const { playerRankings, currentWar, clanMembers, clanStats } = require("../../api/handleClashData")
const { clashNav } = require('../../public/nav')
const { projects } = require('../../public/projects')
const { ensureAuthenticated } = require('../../config/auth')
router.use(express.static('public'))

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('user/clash/index', {})
})

router.get('/clan', ensureAuthenticated, async (req, res) => {
    let clan = await clanStats()
    let members = clan.memberList
    let clanMemberStats = await clanMembers()
    let memberStats = clanMemberStats

    let total = members.reduce((previousValue, currentValue) => {
        return {
            trophies: previousValue.trophies + currentValue.trophies,
            donations: previousValue.donations + currentValue.donations,
            expLevel: previousValue.expLevel + currentValue.expLevel
        }
    })

    res.render('user/clash/clan', { 
        clan: clan, 
        members: members,
        logo: "images/icons/clash-logo.png",
        nav: clashNav,
        projects: ''
    })
})

router.get('/player', ensureAuthenticated, (req, res) => {
    res.render('user/clash/player', {})
})

module.exports = router