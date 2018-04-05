//Main Entry Point for Tori's Interactive Project


var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('public'))


app.get('/tori', function(req, res){
	res.end('<h1>Hi Laufer</h1>')
})

app.post("/answer", function(req, res){
	
	console.log(req.body.text)
	res.sendStatus(200);
})

app.listen(3000, function(){
	console.log("App Listening")
})