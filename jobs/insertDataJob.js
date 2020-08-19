const insertAllClanMemberData = require('../lib/insertAllClanMemberData')
const CronService = require('../services/CronService')

let task = insertAllClanMemberData()
let insertData = new CronService('*/10 * * * * *', task)

module.exports = insertData