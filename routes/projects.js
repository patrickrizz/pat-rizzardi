const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.get('/calorieTracker', (req, res) => {
    res.render('projects/calorieTracker', {})
})

router.get('/loanCalculator', (req, res) => {
    res.render('projects/loanCalculator', {})
})

router.get('/numberGuesser', (req, res) => {
    res.render('projects/numberGuesser', {})
})

router.get('/taskList', (req, res) => {
    res.render('projects/taskList', {})
})

router.get('/tipCalculator', (req, res) => {
    res.render('projects/tipCalculator', {})
})

module.exports = router