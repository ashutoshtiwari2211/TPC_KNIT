const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const companyRoutes = require('./routes/company.routes.js')
const archiveRoutes = require('./routes/archive.routes.js')
const passport = require('passport');

require('dotenv').config()

const db = require("./utils/dbConnection");
db.connect();

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


const companyRoutes = require('./routes/company.routes.js')
app.use('/company', companyRoutes)

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));

app.use(passport.initialize())
app.use(passport.session())


app.use('/company', companyRoutes)
app.use('/archive', archiveRoutes)

const authRoutes = require('./routes/auth.routes.js')
app.use('/auth', authRoutes);

app.use((req, res, next) => {
    res.locals.user = req.user; //passport attached methods to req such as req.isAuthenticate(), req.user etc 
    next(); //whatever there in req-flash it attached to res object and can use it
})



app.use('/', (req, res) => {
    res.render('index');
})



const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})