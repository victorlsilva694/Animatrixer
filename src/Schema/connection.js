const Sequelize = require('sequelize');

const Connection = new Sequelize('animatrix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;