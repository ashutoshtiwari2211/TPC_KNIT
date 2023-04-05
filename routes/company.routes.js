const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller.js')



router.get('/', companyController.showAllCompany)
router.get('/add', companyController.showAddCompany)
router.post('/add', companyController.addCompany)
router.get('/:id', companyController.showCompany)


module.exports = router