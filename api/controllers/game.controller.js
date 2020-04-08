
const GameModel = require('../models/game.model')
const { handleError } = require('../utils')

function getGames (req, res) {
  GameModel
    .find()
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function createGame (req, res) {
  GameModel
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function getGameById (req, res) {
  GameModel
    .findById(req.params.gameId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

module.exports = {
  getGameById,
  getGames,
  createGame
}
