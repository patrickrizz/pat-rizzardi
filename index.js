require("dotenv").config({ silent: true })
const express = require("express")
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')


//start cron jobs
require("./jobs/insertDataJob")
//require("./jobs/discordJob") for discord message bot

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

//express session
app.use(session({
    secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_2],
    name: 'awesomeSession',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    } //only used with https, can't with http. It secures the cookie, sameSite is for same site enforcment
}));

//remove headers
app.use(function (req, res, next) {
    res.removeHeader('X-Powered-By')
    res.removeHeader('Server')
    next()
})

//routes
app.use('/', require('./routes/index'))
app.use('/projects', require('./routes/projects'))
app.use('/clash-of-clans', require('./routes/clashOfClans'))

//404 route
app.use((req, res) => { res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>') })

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.port}`)
})