require("dotenv").config({ silent: true })
const express = require("express")
const app = express()

exports.app = app

const { routes } = require("./app/routes")
const { startServer } = require("./app/startServer")

routes()
startServer()
