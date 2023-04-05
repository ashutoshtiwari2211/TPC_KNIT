const mongoose = require('mongoose');
const companyModel = require('./models/company.js')
const roundModel = require('./models/round')
const studentModel = require('./models/student')

mongoose.connect('mongodb://127.0.0.1:27017/Tpc', {useNewUrlParser: true});
const db=mongoose.connection
db.on('error', err => console.error(err));
db.once('open',()=>{console.log("Database Connected!")});


// companyModel.insertMany([
//    {
//       name: "Infosys",
//       role: "SP",
//       pakage: 9.5,
//       isActive: true
//    },
//    {
//     name: "TCS",
//     role: "Ninja",
//     pakage: 3.36,
//     isActive: true
//    },
//    {
//     name: "Optum",
//     role: "Dev-Ops",
//     pakage: 11,
//     isActive: false
//    },
//    {
//     name: "Maventic",
//     role: "Software Developer",
//     pakage: 6,
//     isActive: false 
//    },
//    {
//     name: "Infosys",
//     role: "DSE",
//     pakage: 6.25,
//     isActive: true
//    },
//    {
//     name: "TCS",
//     role: "Digital",
//     pakage: 7.5,
//     isActive: false
//    },
//    {
//     name: "IndiaMart",
//     role: "Software Developer",
//     pakage: 8,
//     isActive: false
//    },
// ])

// companyModel.deleteMany({}).then((data)=>{
//   console.log(data)
// })


// studentModel.insertMany([
//     {
//         rollNo: 19603,
//         name: "Abhinav Tiwari",
//         branch: "IT"
//     },
//     {
//         rollNo: 19618,
//         name: "Ashutosh Tiwari",
//         branch: "IT"
//     },
//     {
//         rollNo: 19633,
//         name: "Mukesh Pashwan",
//         branh: "IT"
//     },
//     {
//         rollNo: 19646,
//         name: "Ramashish Kushwaha",
//         branch: "IT"
//     },
//     {
//         rollNo: 19407,
//         name: "Abhuday",
//         branch: "CSE"
//     },
//     {
//         rollNo: 19418,
//         name: "Abhay",
//         branch: "CSE"
//     },
//     {
//         rollNo: 19449,
//         name: "Nandini",
//         branh: "CSE"
//     },
//     {
//         rollNo: 19458,
//         name: "Roli Gautam",
//         branch: "IT"
//     },
//     {
//         rollNo: 19205,
//         name: "Shubham Singh",
//         branch: "EL"
//     },
//     {
//         rollNo: 19224,
//         name: "Kumar Ayush",
//         branch: "EL"
//     },
//     {
//         rollNo: 19231,
//         name: "Divyansh",
//         branh: "EL"
//     },
//     {
//         rollNo: 19469,
//         name: "Deepak",
//         branch: "EL"
//     }
// ])

companyModel.deleteMany({}).then((data)=>{
   console.log(data)
})










