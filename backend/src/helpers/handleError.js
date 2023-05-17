const { errorMessages, httpCodes } = require('../constants')

const httpError = (res, err) => {
  console.log(err)
  return res
    .status(httpCodes.INTERNAL_SERVER_ERROR)
    .json({ error: err.message || errorMessages.INTERNAL_SERVER_ERROR })
}

const asyncWrapper =
  fn =>
    (req, res, next, ...args) =>
      fn(req, res, next, ...args).catch(error => httpError(res, error))

module.exports = { asyncWrapper }
