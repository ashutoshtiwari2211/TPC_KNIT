const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { dirname } = require('path');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
const ejsMate = require('ejs-mate');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const session = require('express-session');
// const flash = require('connect-flash');
// const MongoDBStore = require('connect-mongo');

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


app.use('/', (req, res) => {
    res.send('Welcome To Knit Placement Ground');
})




const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})