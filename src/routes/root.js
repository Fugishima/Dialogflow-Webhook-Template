const express = require('express')
const router = express.Router()

const RootController = require('../controllers/RootController')

router.get('', RootController.GET)

module.exports = router