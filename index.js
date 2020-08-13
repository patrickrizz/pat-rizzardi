require("dotenv").config({ silent: true })
const express = require("express")
const app = express()
const passport = require("passport")

exports.app = app

const { handleRoutes } = require("./app/handleRoutes")
const { startServer } = require("./app/startServer")
const { handleSession } = require("./app/handleSession")
require('./config/passport-setup')

const removeHeaders = () => {
    app.use(function (req, res, next) {
        res.removeHeader('X-Powered-By')
        res.removeHeader('Server')

        next()
    })
}

const handleMiddleware = () => {

    removeHeaders()
    handleSession()
    app.use(passport.initialize())
    app.use(passport.session())
}



handleMiddleware()
handleRoutes()
startServer()