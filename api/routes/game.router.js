const router = require('express').Router()

const {
  getGames,
  getGameById,
  createGame
} = require('../controllers/game.controller')

router.get('/', getGames)
router.post('/', createGame)
router.get('/:gameId', getGameById)

module.exports = router
