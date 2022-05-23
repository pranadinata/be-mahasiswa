const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

class Status extends Sequelize.Model {}

Status.init({
    nama_status: Sequelize.STRING
}, {sequelize, modelName: 'StatusAktif'});

module.exports = Status;