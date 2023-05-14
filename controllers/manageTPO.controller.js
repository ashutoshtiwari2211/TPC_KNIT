const companyModel = require('../models/company.js')
const studentModel = require('../models/student.js')
const roundModel = require('../models/round.js')
const commentModel = require('../models/comment.js')
const placementModel = require('../models/placement.js')


class manageTPOController{

    static async show(req, res){
        const allTPO = await studentModel.find({role: "TPO"})
        res.render("manage/showTPO", {allTPO})
    }
    static async addTPO(req, res){
        const {rollNo} = req.body
        const student = await studentModel.findOneAndUpdate({rollNo: rollNo}, {role: "TPO"}, {new: true})
        console.log(student)
        req.flash('success', "New TPO added")
        res.redirect('/manage/TPO')
    }
    static async removeTPO(req, res){
        const {id} = req.params
        await studentModel.findByIdAndUpdate(id, {role: "student"})
        req.flash('success', "TPO removed successfully")
        res.redirect('/manage/TPO')
    }
}



module.exports = manageTPOController