const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

class Kelas extends Sequelize.Model {}

Kelas.init({
    nama_kelas: Sequelize.STRING,
    jumlah_max_mahasiswa: Sequelize.INTEGER,
    status: Sequelize.INTEGER
}, {sequelize, modelName: 'Kelas'});

module.exports = Kelas;

