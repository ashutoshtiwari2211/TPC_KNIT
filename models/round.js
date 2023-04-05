const mongoose = require('mongoose');

const roundSchema = mongoose.Schema({
   roundNo: {
    type: Number
   },
   selectedStudents: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
   ]
})

const roundModel = mongoose.model('Round', roundSchema)
module.exports = roundModel


