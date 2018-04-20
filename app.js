//Main Entry Point for Tori's Interactive Project


var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var http = require('http')
var WebSocket = require('ws')

var server = http.createServer(app)
var wss = new WebSocket.Server({server})

wss.on('connection', function(ws, req){
	console.log('connected')
	
	app.post("/answer", function(req, res){
		console.log(req.body.text)
		console.log(req.body.question)
		ws.send(JSON.stringify({ques: req.body.question, text:req.body.text}), )
		res.sendStatus(200);
	})

})

app.use(bodyParser.json())

app.use(express.static('public'))


app.get('/tori', function(req, res){
	res.end('<h1>Hi Laufer</h1>')
})


server.listen(3000, function(){
	console.log("App Listening")
})