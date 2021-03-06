// Mongoose Connection
const mongoose = require("mongoose")
assert = require("assert")

const url = "mongodb://localhost/theater-db"
mongoose.Promise = global.Promise
mongoose.connect(
	"mongodb://localhost/reddit-db",
	{ useMongoClient: true }
)
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"))
mongoose.set("debug", true)

module.exports = mongoose.connection

// Set db
require('./data/theater-db')