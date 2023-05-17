const { check } = require('express-validator')

const { validateRequest } = require('../helpers/validateRequest')

const validateCreate = [
  check('name')
    .notEmpty().withMessage('name does not exist or is empty').bail()
    .isString().withMessage('name must be a string'),

  check('last_name')
    .notEmpty().withMessage('last_name does not exist or is empty').bail()
    .isString().withMessage('last_name must be a string'),

  check('dni')
    .notEmpty().withMessage('dni does not exist or is empty').bail()
    .isNumeric().withMessage('dni must be a number').bail()
    .custom(value => {
      if (value.length !== 8) {
        console.log(value.length)
        throw new Error('dni must be 8 numbers')
      }
      return true
    }),

  (req, res, next) => {
    // TODO: Validar los campos no permitidos (idea --> strict: true)
    validateRequest(req, res, next)
  }
]

module.exports = { validateCreate }
