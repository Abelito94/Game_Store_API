const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/:userId', getUserById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUserById)

module.exports = router
