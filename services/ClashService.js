const fetch = require('node-fetch')

class ClashServiceAPI {
    constructor(url) {
        this.url = url
        this.token = process.env.CLASH_OF_CLANS_TOKEN
        this.baseURL = process.env.CLASH_OF_CLANS_URL
    }

    async clashAPI() {
        let res = await fetch(this.baseURL + this.url, {
            headers: {
                "Accept": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        })

        let json = await res.json()
        return json
    }
}

module.exports = ClashServiceAPI