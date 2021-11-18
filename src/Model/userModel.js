const Sequelize  = require("sequelize");
const Connection = require("../Schema/connection");

const UsersModel = Connection.define('user', {
    name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

UsersModel.sync({force: false}).then(() => {});
module.exports = UsersModel;