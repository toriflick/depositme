// JavaScript Document
var socket = new WebSocket("ws://localhost:3000");

socket.onopen = function() {
	
	console.log('were open');
}

socket.onmessage = function(event) {
	
	console.log(event.data);
	
	$('.response').append("<p>"+event.data+"</p>")
}