const { Router } = require('express');
var mysql = require('mysql');
const app = express()

/*function validateForm() {
    var x = document.forms["form"]["user"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }*/

app.post('/validate',(req,res)=>{

});
  
function insertUser() {
  console.log("test");
};
  /*
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tcc_db"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tcc_db_users (user_name, user_email, user_password, birth_date) VALUES ?";
    var values = [];
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    */
  