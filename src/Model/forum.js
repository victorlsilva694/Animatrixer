const Sequelize  = require("sequelize");
const Connection = require("../Schema/connection");

const ForumModel = Connection.define('forum', {
    body: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    user_id:{
        type: Sequelize.STRING,
        allowNull: true
    },
    user_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    user_lastname:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

ForumModel.sync({force: false}).then(() => {});
module.exports = ForumModel;