const mongoose = require('mongoose')

const dbConnection = async () => {
  const { MONGODB_CNN } = process.env

  try {
    await mongoose.connect(MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('**** SUCCESSFUL CONNECTION ****')
  } catch (error) {
    console.log('**** CONNECTION ERROR ****')
    // TODO: lanzamos un error ?
    // throw new Error('Error when starting the database: ', error)
  }
}

module.exports = { dbConnection }
