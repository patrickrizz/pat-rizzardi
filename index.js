require("dotenv").config({ silent: true })
const express = require("express")
const app = express()
const passport = require("passport")
const session = require('express-session')

exports.app = app

const { handleRoutes } = require("./app/handleRoutes")
const { startServer } = require("./app/startServer")
const { playerRankings, currentWar, clanMembers } = require("./api/handleClashData")
require('./config/passport-setup')

const handleMiddleware = () => {
    app.use(passport.initialize())
    app.use(passport.session())

    if (app.get('env') === 'production') {
        app.use(session({
            secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_2],
            name: 'awesomeSession',
            resave: false,
            saveUninitialized: false,
            cookie: { 
                secure: true, 
                httpOnly: true ,
                domain: 'patrizzardi.com',
                path: 'foo/bar',
                maxAge: 60000, 
                sameSite: 'strict'
            } //only used with https, can't with http. It secures the cookie, sameSite is for same site enforcment
        }))
    } else app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {}
    }))
}

async function handleClashData() {
    let playerRank = await playerRankings()
    let warStatus = await currentWar()
    let members = await clanMembers()
    console.log()
}

handleMiddleware()
handleRoutes()
startServer()