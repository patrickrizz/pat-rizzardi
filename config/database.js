require('dotenv').config()
const fs = require('fs');
//const cert = fs.readFileSync(__dirname + '/ca-certificate.crt');

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
        dialectOptions: {
            ssl: {
               // rejectUnauthorized: false,
               // ca: cert
            }
          }
      }
}