// This will load our .env file and add the values to process.env,
// IMPORTANT: Omit this line if you don't want to use this functionality


module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",

};