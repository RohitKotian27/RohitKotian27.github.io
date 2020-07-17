$(document).ready(function(){
	$(".prev_btn").click(function(){
		var firstDiv = $(".active").hasClass('first');
		if(firstDiv == true){
			console.log("True");
			$(".prev_btn").attr('disabled');
		}
		else{
			var myDiv = $(".active");
			myDiv.removeClass('active');
			myDiv.hide(500);
			myDiv.prev().addClass('active').show(500);	
		}
	});
	$(".next_btn").click(function(){
		var lastDiv = $(".active").hasClass('last');
		if(lastDiv == true){
			console.log("True");
			$(".next_btn").attr('disabled');
		}
		else{
			var myDiv = $(".active");
			myDiv.removeClass('active');
			myDiv.hide(500);
			myDiv.next().addClass('active').show(500);		
		}
	});	
});