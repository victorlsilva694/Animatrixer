const express = require('express');
const routers = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const passport = require('passport');
var axios = require("axios").default;
const UsersModel = require("../Model/userModel");
const ForumModel = require("../Model/forum");

routers.get('/home', (req, res, next) => {

    var options = {
        method: 'GET',
        url: 'https://hummingbirdv1.p.rapidapi.com/anime/steins-gate',
        headers: {
            'x-rapidapi-host': 'hummingbirdv1.p.rapidapi.com',
            'x-rapidapi-key': '37923f3159msh659f0e5ab2826b1p1d80cejsn2d0575ef9944'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    res.render('user/dashboard', {
        User: req.user
    });
})


routers.get('/forum', async (req, res, next) => {
    res.render('user/Forum', {
        User: req.user,
        Messages: await ForumModel.findAll()
    });
    console.log(ForumModel.findAll())
})



module.exports = routers;
