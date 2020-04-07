const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

function signup (req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.user_password, 10)
  const userBody = {
    name: req.body.user_name,
    email: req.body.user_email,
    password: hashedPwd,
    phone: req.body.user_phone,
    payment_method: req.body.user_payment_method
  }

  UserModel.create(userBody)
    .then((response) => {
      const userData = {
        username: req.body.user_name,
        email: req.body.user_email,
        userId: response._id
      }
      const token = jwt.sign(
        userData,
        process.env.SECRET, // TAKE SECRET KEY FROM .ENV
        { expiresIn: '1w' }
      )
      return res.json({ token: token, ...userData })
    })
    .catch((err) => {
      res.status(403).json({ error: err })
    })
}

function login (req, res) {
  UserModel.findOne({ email: req.body.user_email })
    .then((user) => {
      if (!user) {
        return res.json({ error: 'wrong email' })
      }
      bcrypt.compare(req.body.user_password, user.password, (err, result) => {
        if (err) {
          handleError(err)
        }
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.user_email}`
          })
        }
        const userData = {
          username: user.name,
          email: user.email,
          userId: user._id
        }
        const token = jwt.sign(userData, process.env.SECRET, {
          expiresIn: '1h'
        })
        return res.json({ token: token, ...userData })
      })
    })
    .catch((err) => handleError(err, res))
}

module.exports = {
  signup,
  login
}
