//Server Application for Tori Flick's DepositMe App

//Require and Expose Express
var express = require('express')
var app = express()

//Require and Expose http/WebSocket server
var http = require('http')
var WebSocket = require('ws')
var server = http.createServer(app)
var wss = new WebSocket.Server({server})

//Pass Requests through Helmet
//to set HTTP headers
var helmet = require('helmet')
app.use(helmet())

//Pass requests through bodyParser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
//Log the web_index.html connection
wss.on('connection', function(ws, req){
	console.log('connected')
})

// Broadcast to all connected sockets
wss.broadcast = function broadcast(data) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data)
		}
	})
}

//Serve Static Files
app.use(express.static('public'))

//POST to /answer, format data, and broadcast to sockets
app.post('/answer', function(req, res){
	console.log('POST to /answer')
	var data = JSON.stringify({ques: req.body.question, text:req.body.text})
	wss.broadcast(data)
	res.sendStatus(200)
})

//Start the server and listen
server.listen(3000, function(){
	console.log("App Listening")
})