const gameModel = require('../models/game.model')
const { handleError } = require('../utils')

function getgameById(req, res) {
  gameModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

module.exports = {
  getgameById,
}