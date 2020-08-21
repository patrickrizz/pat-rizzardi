const Discord = require('discord.js')

class DiscordService {
    constructor() {

        this._client = new Discord.Client().once('ready', () => {
            console.log(`Logged in as ${this._client.user.tag}`)
        })

        this._channels = new Promise((res, rej) => {
            this._client.on('ready', () => {
                res(this._client.channels);
            })
        });

        this._client.login(process.env.DISCORD_TOKEN)
    }

    sendMessage(channel, message) {
        this._channel(channel)
            .then(channels => {
                channels.send(message);
            })
    }

    _channel(channel) {

        return this._channels.then(channels => {
            //console.log(channels);
            return channels.cache.get(channel)
        })

    }
}

const instance = new DiscordService()
Object.freeze(instance)

module.exports = instance