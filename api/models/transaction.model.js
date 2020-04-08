const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'game'
  },
  downloads: {
    type: Number,
    default: 5
  }
})

const transactionModel = mongoose.model('transaction', transactionSchema)
module.exports = transactionModel
