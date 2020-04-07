const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    // TODO: Make sure unique index works from Mongoose
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true, 
  },
  payment_method: {
    type: String,
    required: false
  },
  user_games: [{
    Id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"game"
    },
  }],
  shopping_record: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref:"shopping_record"
  }]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
