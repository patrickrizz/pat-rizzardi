const express = require('express')
const router = express.Router()
const ClashRouteService = require('../services/ClashRouteService')
const insertClanMemberWarStats = require('../lib/insertClanMemberWarStats')

router.use(express.static('public'))

router.get('/', async (req, res) => {
    let params = await new ClashRouteService().params()
    res.render('clashOfClans/members', { ...params })
})

router.get('/member-stats', async (req, res) => {
    let params = await new ClashRouteService().params()
    res.render('clashOfClans/memberStats', { ...params })
})

//udpate table
router.post('/member-stats', (req, res) => {
    insertClanMemberWarStats()
    res.redirect('/clash-of-clans/member-stats')
    res.end()
})

module.exports = router