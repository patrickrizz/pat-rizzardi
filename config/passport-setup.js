const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const Settings = require('../app/settings')
const { Users } = require('../db/models/')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: Settings.clientID,
    clientSecret: Settings.clientSecret,
    callbackURL: Settings.callbackURL

}, async (accessToken, refreshToken, profile, done) => {
    Users.findOrCreate({
        where: {
            googleId: profile.id
        }
    })

    return await done(null, profile);

}))

//after strategy is done, you serialize the user
passport.serializeUser((user, done) => {

    done(null, user.id)
})

//then it deserializes the user
passport.deserializeUser((id, done) => {

    User.findByPk(id, (err, user) => {
        done(err, user)
    })
})