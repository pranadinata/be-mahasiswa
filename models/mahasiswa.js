const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

class ObjectMahasiswa extends Sequelize.Model {}

ObjectMahasiswa.init({
  nrp: Sequelize.INTEGER,
  nama_mahasiswa: Sequelize.STRING,
  alamat: Sequelize.TEXT,
  no_telepon: Sequelize.STRING,
  tempat_tgl_lahir: Sequelize.DATE,
  type_mahasiswa: Sequelize.INTEGER,
  status: Sequelize.INTEGER
}, { sequelize, modelName: 'ObjectMahasiswa' });

module.exports = ObjectMahasiswa;