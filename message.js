// const express = require('express');
// const router = express.Router();
const DiscordService = require('./discord');
const CronJob = require('cron').CronJob

// //Discord timed messages
//client.login(key);


    //let channel = client.channels.cache.get(channelId);

    let msg = new CronJob('* * * * * *', () => {
       DiscordService.postMessage("743235183825911879", 'testing')

        //channel.send("5");
    });

    //msg.start();

  
  module.exports = msg;