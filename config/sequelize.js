require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_TYPE
});

//cek koneksi ke DB 
sequelize
  .authenticate()    
  .then(function () {        
    console.log('Koneksi ke db telah berhasil.');    
  })    
  .catch(function (err) {        
    console.log('Tidak dapat melakukan koneksi ke db: ', err);      
  });
module.exports = sequelize;