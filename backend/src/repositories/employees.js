const { EmployeeModel } = require('../models/employees')

const findOneEmployee = async params => EmployeeModel.findOne(params)

const createEmployee = async body => EmployeeModel.create(body)

module.exports = { createEmployee, findOneEmployee }
