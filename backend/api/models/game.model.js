const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  name: {
    type: String
  },
  gender: {
    type: String,
  },
  developers: {
    type: String,
  },
  release_year: {
    type: Date
  },
  platforms: {
    type: Array,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
  },
  information: {
    type: String,
  },
})

const gameModel = mongoose.model('game', gameSchema)
module.exports = gameModel

