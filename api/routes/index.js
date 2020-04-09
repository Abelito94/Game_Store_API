const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const gamesRouter = require('./game.router')
const transactionRouter = require('./transaction.router')
const search = require('./search.router')

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/games', authUser, gamesRouter)
router.use('/transactions', authUser, transactionRouter)
router.use('/search', authUser, search)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
