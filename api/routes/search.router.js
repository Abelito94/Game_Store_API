const router = require('express').Router()

const {
  getSearch
} = require('../controllers/search.controller')

/* const { authUser } = require('../utils') // Authenticated Route
, authUser */

router.post('/', getSearch)

module.exports = router
