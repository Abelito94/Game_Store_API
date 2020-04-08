const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  developers: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  platforms: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo_url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const gameModel = mongoose.model('game', gameSchema)
module.exports = gameModel
