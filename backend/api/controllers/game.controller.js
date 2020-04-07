
const GameModel = require('../models/game.model')
const { handleError } = require('../utils')

function getGameById (req, res) {

  GameModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

module.exports = {
  getGameById
}
