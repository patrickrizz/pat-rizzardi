const { CronJob } = require("cron");
const insertClanMemberData = require('./insertMemberData')
const DiscordService = require('./discordService')

let job = new CronJob('*/10 * * * * *', () => {

    insertClanMemberData()
    //DiscordService.postMessage("743235183825911879", 'Success')
})

module.exports = job