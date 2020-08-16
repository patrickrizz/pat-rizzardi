let fetch = require('node-fetch')

let baseUrl = process.env.CLASH_OF_CLANS_URL
let token = process.env.CLASH_OF_CLANS_TOKEN

const clanStats = async () => {
    let url = 'clans/%23GYQG2ULQ'

    let response = await fetch(baseUrl + url, {
        headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    let json = await response.json()
    return json
}

exports.clanStats = clanStats