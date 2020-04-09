const gameModel = require('../models/game.model')

async function getSearch (req, res) {
  let obj = {}
  let search = req.body.search

  await gameModel
    .find({ name: search })
    .then((game) => {
      obj.game = game
    })
    .catch((err) => console.log(err))

  await gameModel
    .find()
    .then((games) => {
      obj.category = games.filter((game) => game.category === search)
    })
    .catch((err) => console.log(err))

  await res.json(obj)
}

module.exports = {
  getSearch
}
