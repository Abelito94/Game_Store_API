const mongoose = require('mongoose')

const shoppingRecordSchema = new mongoose.Schema({
  date: {
    type: date
  },
  game: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref:"game"
  }],
  downloads: {
    type: Number,
  },
})

const shoppingRecordModel = mongoose.model('shoppingRecord', shoppingRecordSchema)
module.exports = shoppingRecordModel











