$(document).ready(function(){
	$('.myform').on('click','.myBtn',function(){
		var myValue = $('.inp1').val();
		$('.inp1').empty();
		if(myValue == ""){
			alert("This field can't be kept empty!");
			$('.inp1').focus();
		}
		else{
			var result = '<div class="mytext">\
						<div class="fa fa-trash-o"></div>' + myValue + '</div>';
		    $('.myList').append(result);
		    $('.inp1').val("");
	}
	});
	$('.myList').on('click','.fa-trash-o',function(){
		$(this).parent().fadeOut(1000);
	});
});
