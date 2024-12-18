const express = require('express')
const route = express.Router()
const userCntr = require('../controller/controller')

route.post('/registation', userCntr.addUser)

module.exports = route