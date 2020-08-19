require('dotenv').config()

module.exports = {
    development: {
        dialect: "sqlite",
        storage: "./db/dev.db",
        logging: false
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        host: process.env.DB_HOST,
        dialect: "mysql",
        ssl: {
            key: cKey,
            cert: cCert,
            ca: cCA
          }
      }
}