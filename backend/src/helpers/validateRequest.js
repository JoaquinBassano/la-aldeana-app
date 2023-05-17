const { validationResult } = require('express-validator')

const { httpCodes } = require('../constants')

const validateRequest = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    return res.status(httpCodes.BAD_REQUEST).json({ errors: err.array().map(error => error.msg) })
  }
}

module.exports = { validateRequest }
