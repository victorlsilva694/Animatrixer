const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const index = require('./Routes/Routes');
const passport = require('passport');
const flash = require('flash');
const session = require('express-session');
const userAuthenticate = require('./Routes/userAuthenticate')
require('./config/auth')(passport)

app.use(session({
    secret: 'FitGymEntry',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 2 * 60 * 90000}
}));

function authenticateMiddleware(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
}

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', index);
app.use('/User/', authenticateMiddleware, userAuthenticate)
    /*
     *******************************************************************
     ****app.use('/User/', authenticateMiddleware, userAuthenticate)****
     *******************************************************************
    */

module.exports = app;