var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

app.get('/register', function(req, res){
	var result = registerUser(req.query);
	if(result)
		res.send("success");
});
app.get('/login', function(req, res){
	var result = loginUser(req.query);
	if(result.length)
		res.send(result);
	else
		res.send('fail');	
});

app.listen(3000);


function registerUser(reqParams){
	var sql = "INSERT INTO user_details  VALUES (NULL, '"+reqParams.username+"','"+reqParams.email+"','"+reqParams.password+"')";
	var connObj = conn(sql);
	if(!connObj)
		return "Some error";	
}
function loginUser(reqParams){
	var returnResult=[];
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "infiniti",
	  database: "teamtalk"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("am at 40");
	  con.query("SELECT * FROM user_details WHERE email_id='"+reqParams.email+"' AND password='"+reqParams.password+"'", function (err, result) {
		if (err) throw err;
		returnResult=result;
		console.log("am in 43");
	  });
	});
	console.log("am in 46");
	
	return returnResult;
}

function conn(sql){
	var returnResult = false;
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "infiniti",
	  database:"teamtalk"
	});

	con.connect(function(err) {
		if (err) throw err;
	  	con.query(sql, function (err) {
		if (err) throw err;
		returnResult=true;
	  });
	});
	return returnResult
}

