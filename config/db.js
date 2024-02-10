let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'al_store'
 });

connection.connect((err)=>{
   if(!err){
    console.log('Koneksi ke database MySql Berhasil!');
   }else{
    console.log(err);
   }
 })

module.exports = connection;