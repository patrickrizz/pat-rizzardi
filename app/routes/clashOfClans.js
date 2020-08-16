const express = require('express')
const router = express.Router()
const { clanStats } = require("../../api/handleClashData")
const { clashNav } = require('../../public/nav')
const insertClanMemberStats = require('../../services/insertClanMemberStats')

router.use(express.static('public'))

router.get('/', async (req, res) => {
    let clan = await clanStats()
    let members = clan.memberList

    res.render('clashOfClans/members', { 
        clan: clan,
        members: members,
        logo: "images/icons/clash-logo.png",
        nav: clashNav,
        projects: ''
    })
})

router.get('/member-stats', async (req, res) => {
    let clan = await clanStats()
    let members = clan.memberList

    res.render('clashOfClans/memberStats', { 
        clan: clan,
        members: members,
        logo: "images/icons/clash-logo.png",
        nav: clashNav,
        projects: ''
    })
})

router.post('/member-stats', (req, res) => {
    insertClanMemberStats()

    res.redirect('/clashOfClans')
    res.end()
})

router.get('/player', (req, res) => {
    res.render('user/clash/player', {})
})

module.exports = router