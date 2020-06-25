const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const Settings = require('../app/settings')
const { Users } = require('../db/models/')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: "1015680144613-8452u8s6uo1cr8jvekb9hrd0fi2duo2o.apps.googleusercontent.com",
    clientSecret: Settings.clientSecret,
    callbackURL: Settings.callbackURL

}, (accessToken, refreshToken, profile, done) => {
    Users.findOrCreate({
        where: {
            googleid: profile.id,
            email: profile.emails[0].value
        }
    })

    return done(null, profile)
}))

//after strategy is done, you serialize the user
passport.serializeUser((user, done) => {

    done(null, user)
})

//then it deserializes the user
passport.deserializeUser((user, done) => {

    done(null, user)
})