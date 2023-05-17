const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    dni: {
      type: Number,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = { EmployeeModel: mongoose.model('employees', EmployeeSchema) }
