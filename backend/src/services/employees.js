const { errorMessages, httpCodes } = require('../constants')

const employeeRepository = require('../repositories/employees')

const createEmployee = async body => {
  const existsEmployee = await employeeRepository.findOneEmployee({ dni: body.dni })
  if (existsEmployee) {
    return {
      isValid: false,
      code: httpCodes.BAD_REQUEST,
      error: errorMessages.EMPLOYEE_ALREADY_EXISTS
    }
  }

  const employee = await employeeRepository.createEmployee(body)

  return { isValid: true, code: httpCodes.CREATED, data: employee }
}

module.exports = { createEmployee }
