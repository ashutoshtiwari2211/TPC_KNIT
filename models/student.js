const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    rollNo: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    course: {
        type: String
    },
    branch: {
        type: String
    },
    startYear: {
        type: Number
    },
    endYear: {
        type: Number
    },
    contactNumber: {
        type: Number
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    }

})


const studentModel = mongoose.model('Student', studentSchema)
module.exports = studentModel
