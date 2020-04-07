const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const searchRouter = require('./search.router')
const gameRouter = require('./game.router')

const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/search', searchRouter)
router.use('/game', gameRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
