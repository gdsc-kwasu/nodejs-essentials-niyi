const express = require('express')

const router = express.Router()

const {getMessage} = require('../controller/index')

router.get('/profile', getMessage)

module.exports = router
