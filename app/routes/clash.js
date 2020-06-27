const express = require('express')
const router = express.Router()
const { playerRankings, currentWar, clanMembers, clanStats } = require("../../api/handleClashData")

router.use(express.static('public'))

router.get('/', (req, res) => {
    res.render('user/clash/index', {})
})

router.get('/clan', async (req, res) => {
    let clan = await clanStats()
    let members = clan.memberList
    res.render('user/clash/clan', {clan: clan, members: members})
})

router.get('/player', (req, res) => {
    res.render('user/clash/player', {})
})

module.exports = router