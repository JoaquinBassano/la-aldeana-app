const express = require('express')
const fs = require('fs')

const { httpCodes, errorMessages } = require('../constants')

const router = express.Router()
const pathRouter = `${__dirname}`

const removeExtension = fileName => {
  return fileName.split('.').shift()
}

// eslint-disable-next-line array-callback-return
fs.readdirSync(pathRouter).filter(file => {
  const fileWithOutExt = removeExtension(file)

  const skip = ['index'].includes(fileWithOutExt)
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
  }
})

router.get('*', (req, res) => {
  return res
    .status(httpCodes.NOT_FOUND)
    .send({ error: errorMessages.NOT_FOUND })
})

module.exports = router
