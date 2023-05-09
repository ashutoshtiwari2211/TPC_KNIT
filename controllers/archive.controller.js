const companyModel = require('../models/company.js')
const studentModel = require('../models/student.js')
const roundModel = require('../models/round.js')
const commentModel = require('../models/comment.js')


class archiveController{

    static async showArchive(req, res){
        res.render('archive/showArchive')
    }

}



module.exports = archiveController

