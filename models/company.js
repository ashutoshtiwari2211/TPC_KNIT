const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
   name: {
    type: String
   },
   role: {
    type: String
   },
   pakage: {
    type: Number
   },
   timestamp: { 
    type: Date, 
    default: Date.now
   },
   isActive: {
    type: Boolean,
    default: true,
    required: true
   },
   eligibleBranches: {
    type: [String]
   },
   description: {
    type: String
   },
   rounds: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Round'
      }
   ],
   comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
   ]
})


const companyModel = mongoose.model("Company", companySchema)
module.exports = companyModel 













