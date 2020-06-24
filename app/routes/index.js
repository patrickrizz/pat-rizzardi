const express = require('express')
const router = express.Router()

router.use(express.static('public'))

//landing page
router.get('/', (req, res) => {
    res.render('index', {})
})

module.exports = router