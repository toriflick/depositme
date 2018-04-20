// JavaScript Document
var socket = new WebSocket("ws://localhost:3000");

socket.onopen = function() {
	
	console.log('were open');
}

socket.onmessage = function(event) {
	
	console.log(event.data);
	var object = JSON.parse(event.data);
	console.log(object);
	
	$('.response').append("<p class="+object.ques+">"+object.text+"</p>")
}