const { app } = require("../index")
const express = require("express")
const handleRoutes = () => {

    //ejs
    app.set('view engine', 'ejs')

    //espress body parser
    app.use(express.urlencoded({ extended: false }))

    app.use('/', require('./routes/index'))
    app.use('/projects', require('./routes/projects'))
    app.use('/auth', require('./routes/auth'))

    // 404 route must be last
    app.use((req, res) => {
        res.status(404)
            .send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>')
    })
}

exports.handleRoutes = handleRoutes