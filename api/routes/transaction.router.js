const router = require('express').Router()

const {
  getTransactions,
  getTransactionById,
  createTransaction
} = require('../controllers/transaction.controller')

router.get('/', getTransactions)
router.post('/', createTransaction)
router.get('/:TransactionId', getTransactionById)

module.exports = router
