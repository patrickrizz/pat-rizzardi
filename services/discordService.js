const Discord = require('discord.js')

class DiscordService {
    constructor() {
        this._client = new Discord.Client().once('ready', () => {
            console.log(`Logged in as ${this._client.user.tag}`)
        })

        this._client.login(process.env.DISCORD_TOKEN)
    }

    postMessage(channel, message) {
        let c = this._channel(channel)
        c.send(message)
    }

    _channel(channel) {
        return this._client.channels.cache.get(channel)
    }
}

module.exports = DiscordService