const express = require('express')
const cors = require('cors')

const logger = require('../logger')

const { dbConnection } = require('../../config/mongo')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT

    this.connectDB()
    this.middlewares()
    this.routes()
  }

  async connectDB () {
    await dbConnection()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use('/api', require('../routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      logger.success('Server is running on PORT', this.port)
    })
  }
}

module.exports = Server
