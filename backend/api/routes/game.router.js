const router = require('express').Router()

const {
  getGameById
} = require('../controllers/game.controller')

/* const { authUser } = require('../utils') // Authenticated Route
, authUser */

router.get('/:id', getGameById)

module.exports = router
