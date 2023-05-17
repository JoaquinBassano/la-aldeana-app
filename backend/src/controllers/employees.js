const { response, request } = require('express')

const { employeesMock } = require('../mocks/employees')

const employeeService = require('../services/employees')

const { asyncWrapper } = require('../helpers/handleError')

const employeesGet = (req = request, res = response) => {
  res.json(employeesMock)
}

const createEmployee = asyncWrapper(async (req = request, res = response) => {
  const response = await employeeService.createEmployee(req.body)

  if (!response.isValid) { return res.status(response.code).json({ error: response.error }) }

  return res.status(response.code).json(response.data)
})

module.exports = {
  employeesGet, createEmployee
}
