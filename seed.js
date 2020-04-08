const seeder = require('mongoose-seed')
require('dotenv').config()

const data = require('./games-seed.json')
seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/game.model.js'])
  seeder.clearModels(['game'], function () {
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})
