const express = require('express')
const router = express.Router()
const archiveController = require('../controllers/archive.controller.js')



router.get('/', archiveController.showArchive)





module.exports = router