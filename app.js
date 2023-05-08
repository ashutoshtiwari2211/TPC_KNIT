const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const companyRoutes = require('./routes/company.routes.js')
const archiveRoutes = require('./routes/archive.routes.js')
require('dotenv').config()

mongoose.connect('mongodb://127.0.0.1:27017/Tpc', {useNewUrlParser: true});
const db=mongoose.connection
db.on('error', err => console.error(err));
db.once('open',()=>{console.log("Database Connected!")});

//built-in middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

//use static files in app.js
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'partials')));




app.use('/company', companyRoutes)
app.use('/archive', archiveRoutes)


app.use('/', (req, res) => {
    res.send('Welcome To Knit Placement Ground');
})



const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})