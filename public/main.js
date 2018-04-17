$(document).ready(function(){
	
	console.log("hello tori")
	
	$(".enter").on("submit", function(event){
		event.preventDefault();	
		var text = $("#text").val();
		console.log(text);
	
		var data = JSON.stringify({"text":text});
		
		$.ajax({
			'type': "POST",
			'contentType': "application/json",
			'url': "/answer",
			'data': data,
			statusCode: {
				200: function(data) {
					console.log("sucess");
				}
			}
		})
	
	
	});
})