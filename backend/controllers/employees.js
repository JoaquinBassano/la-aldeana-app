const { response, request } = require('express')

const { employeesMock } = require('../mocks/employees')

const employeesGet = (req = request, res = response) => {
  res.json(employeesMock)
}

module.exports = {
  employeesGet
}
