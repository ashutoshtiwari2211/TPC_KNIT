const mongoose = require('mongoose');

const roundSchema = mongoose.Schema({
   selectedStudents: []
})

const roundModel = mongoose.model('Round', roundSchema)
module.exports = roundModel


