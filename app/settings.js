// This will load our .env file and add the values to process.env,

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK || "http://localhost:3000/auth/google/callback"
};