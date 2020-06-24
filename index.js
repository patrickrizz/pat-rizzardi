require("dotenv").config({ silent: true })
const express = require("express")
const app = express()

exports.app = app

const { routes } = require("./app/routes")
const { startServer } = require("./app/startServer")
const { playerRankings, currentWar, clanMembers } = require("./api/handleClashData")

async function handleClashData() {
    let playerRank = await playerRankings()
    let warStatus = await currentWar()
    let members = await clanMembers()
    console.log()
}

routes()
startServer()