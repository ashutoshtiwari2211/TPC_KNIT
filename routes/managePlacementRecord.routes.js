const express = require('express')
const router = express.Router()
const manageCompanyRecordController = require('../controllers/managePlacementRecord.controller.js')


router.get('/', manageCompanyRecordController.show)




module.exports = router