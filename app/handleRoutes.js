const { app } = require("../index")
const express = require("express")
const { ensureAuthenticated } = require('../config/auth')

const handleRoutes = () => {

    middleware()
    routes()
    clashOfClansRoutes()
    unknownRoutes()
}

//required for ejs and getting form data
const middleware = () => {
    //ejs
    app.set('view engine', 'ejs')

    //espress body parser
    app.use(express.urlencoded({ extended: false }))
}

//general category routes
const routes = () => {
    app.use('/', require('./routes/index'))
    app.use('/projects', require('./routes/projects'))
    app.use('/auth', require('./routes/auth'))
}

//users routes
const clashOfClansRoutes = () => {
    app.use('/clashOfClans', require('./routes/clashOfClans'))
}

//404 
const unknownRoutes = () => app.use((req, res) => { res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>') })

exports.handleRoutes = handleRoutes