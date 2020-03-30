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
						<div class="remove">X</div>' + myValue + '</div>';
		$('.myList').append(result);
	}
	});
	$('.myList').on('click','.remove',function(){
		$(this).parent().fadeOut(1000);
	});
});
