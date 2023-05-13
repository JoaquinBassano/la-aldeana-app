const mongoose = require('mongoose')

const logger = require('../src/logger')

const dbConnection = async () => {
  const { MONGODB_CNN } = process.env

  try {
    await mongoose.connect(MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    logger.complete('**** SUCCESSFUL CONNECTION ****')
  } catch (error) {
    logger.fatal('**** CONNECTION ERROR ****')
    // TODO: lanzamos un error ?
    // throw new Error('Error when starting the database: ', error)
  }
}

module.exports = { dbConnection }
