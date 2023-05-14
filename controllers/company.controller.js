const companyModel = require('../models/company.js')
const studentModel = require('../models/student.js')
const roundModel = require('../models/round.js')
const commentModel = require('../models/comment.js')
const placementModel = require('../models/placement.js')

class companyController{
    static async showAllCompany(req, res){
        
        const activeCompaniesList = await companyModel.find({isActive: true})
        const pastCompaniesList = await companyModel.find({isActive: false})
        res.render('company/index', {activeCompaniesList, pastCompaniesList})
    }
    static async showCompany(req, res){
        const {id} = req.params
        const company = await companyModel.findById(id).populate('rounds').populate('comments')
//console.log(company.rounds[0].selectedStudents[0].Name)

        const allStudents = await studentModel.find({}) 
        res.render('company/showCompany', {company, allStudents})
    }
    static async showAddCompany(req, res){
        res.render('company/addCompany')
    }
    static async addCompany(req, res){
        console.log(req.body)
        const company = new companyModel(req.body)
        await company.save()
        req.flash('success', "Drive added successfully")
        res.redirect('/company')
    }
    static async studentApi(req, res){
        const students = await studentModel.find({})
        res.status(200).json({students})
    }
    static async addRound(req, res){
        const {id} = req.params
        res.render('company/addRound', {id})
    }
    static async roundResult(req, res){
        const {id} = req.params
        const {selectedStudents, name} = req.body
        const round = new roundModel()
        for(let i = 0; i < selectedStudents.length; i++)
            selectedStudents[i] = JSON.parse(selectedStudents[i])

        //console.log(selectedStudents)
        round.selectedStudents = selectedStudents
        round.name = name
        //console.log(round)
        const company = await companyModel.findById(id)
        company.rounds.push(round)

        await company.save()
        await round.save()
        req.flash('success', "Round added")
        res.redirect(`/company/${id}`)
    }
    static async addComment(req, res){
        const comment = new commentModel()
        comment.content = req.body.content
        comment.name = req.user.name                 //dummy
        comment.rollNo = req.user.rollNo                     //dummy
        const data = new Date()
        const d = data.toDateString()
        comment.publishDate =  d.substring(4, 7) + " " + d.substring(8, 10) + ", " + d.substring(11, 15) + " " + data.getHours() + ":" + data.getMinutes()  

        const {id} = req.params
        const company = await companyModel.findById(id)
        company.comments.push(comment)

        await company.save()
        await comment.save()

        res.redirect(`/company/${id}`)
    }
    static async markPastDrive(req, res){
        const {id} = req.params
        await companyModel.findByIdAndUpdate(id, {isActive: false})
        res.redirect('/company')
    }
    static async deleteCompany(req, res){
        const {id} = req.params
        await companyModel.findByIdAndDelete(id)
        req.flash('success', "Company Removed")
        res.redirect('/company')
    }
    static async finaliseRound(req, res){
        console.log(req.params)
        const {id} = req.params
        await companyModel.findByIdAndUpdate(id, {isHired: true})
        const company = await companyModel.findById(id).populate('rounds')
        const round = company.rounds[company.rounds.length-1]
        const placedRollNos = round.selectedStudents.map((obj)=>{return obj["Roll No."]})
        console.log(placedRollNos) 

        await placementModel.updateMany({rollNo: {$in: placedRollNos}}, {$addToSet: {placedIn: id}})
        req.flash('success', "Round finalised")
        res.redirect(`/company/${id}`)
    }

}

module.exports = companyController



