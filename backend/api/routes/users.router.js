const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

const { authUser } = require('../utils') // Authenticated Route

router.get('/:id', authUser, getUserById)
router.put('/:id', authUser, updateUser)
router.delete('/:id', authUser, deleteUserById)

module.exports = router
