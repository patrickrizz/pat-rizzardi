const fs = require('fs')

module.exports = {
    development: {
        dialect: "sqlite",
        storage: "./db/dev.sq",
        logging: false
    },
    test: {
        dialect: "sqlite",
        storage: ":memory"
    },
    production: {
        dialect: "sqlite",
        storage: "/var/www/db/production.sq",
        logging: function (msg) {
            let log = fs.createWriteStream('./log/database.txt', { flags: 'a' }, (err) => {
                if (err) console.log(err)
            })
            log.write(`${msg}\n`)
        }
    }
}