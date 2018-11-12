// server.js - Theater Reservation API

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbName = 'theater'
let db = null

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server")
  
    db = client.db(dbName);
})

// Example stub:
app.get('/theater/name-of-route', (req, res) => {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`})
})

app.get('/theater/')

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})