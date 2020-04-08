const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

function signup (req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  const userBody = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPwd,
    phone: req.body.phone
  }

  UserModel.create(userBody)
    .then((response) => {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        user_id: response._id
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
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.json({ error: 'wrong email' })
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          handleError(err)
        }
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.email}`
          })
        }
        const userData = {
          name: user.name,
          email: user.email,
          user_id: user._id
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
