const { response, request } = require('express')

const { employeesMock } = require('../mocks/employees')

const { EmployeeModel } = require('../models/employees')

const { asyncWrapper } = require('../helpers/handleError')

const employeesGet = (req = request, res = response) => {
  res.json(employeesMock)
}

const createEmployee = asyncWrapper(async (req = request, res = response) => {
  const response = await EmployeeModel.create(req.body)

  res.json({ body: response })
})

module.exports = {
  employeesGet, createEmployee
}
