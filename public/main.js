$(document).ready(function(){

	var object = appendQuestion();
	
	console.log("hello tori")
	
	
	$(".enter").on("submit", function(event){
		event.preventDefault();	
		var text = $("#text").val();
		console.log(text);
		object.text = text;
		console.log(object)
		var data = JSON.stringify(object);
		
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
		
		object = appendQuestion();
	
	
	});
	
	function appendQuestion(){
		
		var questions = ["<h1>What is your worst <bold>fear</bold>?</h1>",
						"<h1>What is your biggest <bold>regret</bold>?</h1>",
						"<h1>What is your worst <bold>trait</bold>?<h1>",
						"<h1>What is something that makes <bold>happy</bold>?</h1>",
						"<h1>What is your favorite <bold>memory</bold>?</h1>",
						"<h1>What is your best <bold>quality</bold>?</h1>"];

		var num = Math.floor(Math.random()*6);

		var ques = "";

		if(num==0){
			ques="fear"
		}
		else if(num==1){
			ques="regret"
		}
		else if(num==2){
			ques="trait"
		}
		else if(num==3){
			ques="happy"
		}
		else if(num==4){
			ques="memory"
		}
		else if(num==5){
			ques="quality"
		}
		
		$(".question").empty();
		$(".question").append(questions[num]);
		
		var obj = {};
		obj.question = ques;
		return obj;
	}
})