const companyModel = require('../models/company.js')
const studentModel = require('../models/student.js')

class companyController{
    static async showAllCompany(req, res){
        const activeCompaniesList = await companyModel.find({isActive: true})
        const pastCompaniesList = await companyModel.find({isActive: false})
        res.render('company/index', {activeCompaniesList, pastCompaniesList})
    }
    static async showCompany(req, res){
        const {id} = req.params
        const company = await companyModel.findById(id)
        const allStudents = await studentModel.find({}) 
        res.render('company/showCompany', {company, allStudents})
    }
    static async showAddCompany(req, res){
        res.render('company/addCompany')
    }
    static async addCompany(req, res){
        const company = new companyModel(req.body)
        await company.save()
        res.redirect('/company')
    }
}

module.exports = companyController



