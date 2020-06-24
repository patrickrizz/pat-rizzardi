const playerRankings = async () => {
    let fetch = require('node-fetch')
    let url = "https://api.clashofclans.com/v1/locations/32000249/rankings/players?limit=5"
    let token = process.env.CLASH_OF_CLANS;
    let response = await fetch(url, {
        headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${token}`
        }
    });

    let json = await response.json()
    return json
}

const clanMembers = async () => {
    let fetch = require('node-fetch')
    let url = "https://api.clashofclans.com/v1/clans/%23CLJUQC8C/members"
    let token = process.env.CLASH_OF_CLANS
    let response = await fetch(url, {
        headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    let json = await response.json()
    return json
}

const currentWar = async () => {
    let fetch = require('node-fetch')
    let url = "https://api.clashofclans.com/v1/clans/%23CLJUQC8C/currentwar"
    let token = process.env.CLASH_OF_CLANS;
    let response = await fetch(url, {
        headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    let json = await response.json()
    return json
}

exports.playerRankings = playerRankings
exports.clanMembers = clanMembers
exports.currentWar = currentWar