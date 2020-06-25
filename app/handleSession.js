const session = require('express-session');
const { app } = require("../index");
function handleSession() {
    if (app.get('env') === 'production') {
        // app.use(session({
        //     secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_2],
        //     // name: 'awesomeSession',
        //     // resave: false,
        //     // saveUninitialized: false,
        //     cookie: {
        //         //secure: true,
        //         //httpOnly: true,
        //         //domain: 'patrizzardi.com',
        //         maxAge: 60000
        //     } //only used with https, can't with http. It secures the cookie, sameSite is for same site enforcment
        // }));
        app.use(session({
            secret: process.env.SESSION_SECRET,
            cookie: {}
        }));
    }
    else
        app.use(session({
            secret: process.env.SESSION_SECRET,
            cookie: {}
        }));
}
exports.handleSession = handleSession;
