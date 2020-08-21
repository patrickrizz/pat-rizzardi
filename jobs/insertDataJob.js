const insertAllClanMemberData = require('../lib/insertAllClanMemberData')
const { CronJob } = require("cron");

let insertData = new CronJob('*/10 * * * * *', () => {
    return insertAllClanMemberData()
})

insertData.start()