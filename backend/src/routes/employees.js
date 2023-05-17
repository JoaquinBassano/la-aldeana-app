const { Router } = require('express')

const {
  employeesGet, createEmployee
} = require('../controllers/employees')

const { validateCreate } = require('../validators/employees')

const router = Router()

router.get('/', employeesGet)
router.post('/', [validateCreate], createEmployee)

module.exports = router
