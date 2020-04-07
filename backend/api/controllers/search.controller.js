const gameModel = require('../models/game.model')
const { handleError } = require('../utils')



async function getSearch(req, res) {
  let obj = {}
  let search = req.body.search

  await gameModel
    .find({ name: search })
    .then(games => {
      obj.game = games
    })
    .catch((err) => console.log(err))

  await gameModel
    .find()
    .populate('gender')
    .then(games => {
      obj.gender = games.filter(game => 
        game.gender == search
      )
    })
    .catch((err) => console.log(err))

  await res.json(obj)
}



module.exports = {
  getSearch
}



