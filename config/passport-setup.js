const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://patrizzardi.com/auth/google/callback" //put urls in google console

}, (accessToken, refreshToken, profile, done) => {
    //use prfile id to check if use is registered in db
    User.findOrCreate({ googleid: profile.id }, (error, user) => {
        //return done(error, profile)
        return done(null, profile)
    })
}))

//after strategy is done, you serialize the user
passport.serializeUser((user, done) => {
    //done(error, user.id)
    done(null, user)
})

//then it deserializes the user
passport.deserializeUser((id, done) => {
    //User.findByPk(id, (error, user) => {
        done(err, user)
    //})
})