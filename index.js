require("dotenv").config({ silent: true })
const express = require("express")
const app = express()
const passport = require("passport")
const msg = require('./message')

exports.app = app

const { handleRoutes } = require("./app/handleRoutes")
const { startServer } = require("./app/startServer")
const { handleSession } = require("./app/handleSession")
require('./config/passport-setup')

const removeHeaders = () => {
    app.use(function (req, res, next) {
<<<<<<< HEAD
        res.removeHeader('X-Powered-By')
        res.removeHeader('Server')

        next()
    })
}

const handleMiddleware = () => {

=======
       res.removeHeader('X-Powered-By')
       res.removeHeader('Server')

       next()
    })
} 

const handleMiddleware = () => {
    
>>>>>>> 12459f18f53feda58bbadfdf0d08d0d3fc23c745
    removeHeaders()
    handleSession()
    app.use(passport.initialize())
    app.use(passport.session())
}



handleMiddleware()
handleRoutes()
startServer()