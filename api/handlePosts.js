const GhostContentAPI = require('@tryghost/content-api')

const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_API,
    version: 'v3',
})

module.exports.api = api