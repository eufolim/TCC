var fs = require('fs');
const express = require('express');
const path = require('path')
const app = express()
const mysql = require('mysql')

app.use(express.static('public'));

app.get('/quiz',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/page/Questions.html'))
});

app.get('/register',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/page/Register.html'))
});

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/page/Login.html'))
});

app.get('/home',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/page/Home.html'))
});

app.get('/maker',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/page/Maker.html'))
});

app.get('/question/:id', (req,res)=>{
  con.query("SELECT * FROM questions WHERE id = ?", [req.params.id] , function (err, result, fields) {
      if (err) throw err;
      console.log("query");
      console.log(result); 
      res.json(result[0])
  }); 
})
app.listen(8080, ()=>{
  console.log("Server listening on 8080")
})


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tcc_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
}); 

//create a server object:
/* 
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 
*/
//var page = require("./script")

//page.start(1) 