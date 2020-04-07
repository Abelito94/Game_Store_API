const router = require('express').Router()

const {
  getgameById
} = require('../controllers/game.controller')

/* const { authUser } = require('../utils') // Authenticated Route
, authUser */

router.get('/:id', getgameById)

module.exports = router
