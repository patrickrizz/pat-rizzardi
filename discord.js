const Discord = require('discord.js')
//const client = new Discord.Client()
const CronJob = require('cron').CronJob

// const key = "NjkyMjAxODE4MDQ1OTM5NzI0.XnrFLQ.pLDnCGSeoaX2FLPZhqeEygVXGNQ";
const channelId = "743235183825911879";

class DiscordService {
    constructor() {
        this._client = new Discord.Client()

        this._client.once('ready', () => {
            console.log(`Logged in as ${this._client.user.tag}`)
            //let c = this._client.channels.cache.get(channelId)
            //let c = this._channel(channelId)
            //console.log(c)
        })

        this._client.login(process.env.DISCORD_TOKEN)
    }

    postMessage(channel, message) {
        let c = this._channel(channel)
        console.log(c)
        //c.send(message)
    }

    _channel(name) {
        return this._client.channels.cache.find(c => c.name == name )
    }
}

const instance = new DiscordService()
Object.freeze(instance)

module.exports = instance

// //Discord timed messages
// //client.login(key);

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);

//     let channel = client.channels.cache.get(channelId);

//     let msgOne = new CronJob('00 09 18 * * *', () => {
//         channel.send("5");
//     });

//     let msgTwo = new CronJob('20 09 18 * * *', () => {
//         channel.send("6");
//     });

//     let msgThree = new CronJob('40 09 18 * * *', () => {
//         channel.send("7");
//     });
//     msgOne.start();
//     msgTwo.start();
//     msgThree.start();
// });
