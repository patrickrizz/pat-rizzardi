const DiscordService = require('../services/DiscordService')
const { CronJob } = require("cron");

let discordJob = new CronJob('00 00 08 * * *', () => {
    return DiscordService.sendMessage('743235183825911879', 'Good Morning')
})

discordJob.start()