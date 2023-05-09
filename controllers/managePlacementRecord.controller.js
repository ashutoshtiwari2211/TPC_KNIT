const companyModel = require('../models/company.js')
const studentModel = require('../models/student.js')
const roundModel = require('../models/round.js')
const commentModel = require('../models/comment.js')
const placementModel = require('../models/placement.js')

class managePlacementRecordController {

    static async show(req, res){
        res.render('manage/showPlacementRecord')
    }
}




module.exports = managePlacementRecordController