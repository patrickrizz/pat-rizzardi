require("dotenv").config({ silent: true })
const express = require("express")
const app = express()
const passport = require("passport")

exports.app = app

const { handleRoutes } = require("./app/handleRoutes")
const { startServer } = require("./app/startServer")
const { handleSession } = require("./app/handleSession")
require('./config/passport-setup')

const handleMiddleware = () => {
    
    handleSession()
    app.use(passport.initialize())
    app.use(passport.session())
}

handleMiddleware()
handleRoutes()
startServer()