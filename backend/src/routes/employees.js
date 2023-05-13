const { Router } = require('express')

const {
  employeesGet
} = require('../controllers/employees')

const router = Router()

router.get('/', employeesGet)

module.exports = router
