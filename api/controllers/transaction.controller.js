
const TransactionModel = require('../models/transaction.model')
const { handleError } = require('../utils')

function getTransactions (req, res) {
  TransactionModel
    .find({ user: res.locals.user._id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function createTransaction (req, res) {
  req.body.user = res.locals.user._id
  TransactionModel
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function getTransactionById (req, res) {
  TransactionModel
    .findById(req.params.TransactionId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

module.exports = {
  getTransactionById,
  getTransactions,
  createTransaction
}
