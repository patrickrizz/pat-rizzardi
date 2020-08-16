const Discord = require('discord.js')

class DiscordService {
    constructor() {
        this._client = new Discord.Client()

        this._client.once('ready', () => {
            console.log(`Logged in as ${this._client.user.tag}`)
        })

        this._client.login(process.env.DISCORD_TOKEN)
    }

    async postMessage(channel, message) {
        let c = this._channel(channel)
        await c.send(message) 
    }

    _channel(channel) {
        return this._client.channels.cache.get(channel)
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
