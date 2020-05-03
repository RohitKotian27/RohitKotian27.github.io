$(document).ready(function(){
	$('.myform').on('click','.myBtn',function(){
		var myValue = $('.inp1').val();
		if(myValue == ""){
			alert("This field can't be kept empty!");
			$('.inp1').focus();
		}
		else{ 	
			var result = '<div class="mytext">\
						<div class="fa fa-trash-o del_btn"></div><span class="fa fa-check check_button"></span>' + myValue + '</div>';
		    $('.myList').append(result);
		    $('.inp1').val("");
	}
	});

	$('.myList').on('click','.del_btn',function(){
		$(this).parent().fadeOut(1000);
	});

    $('.myList').on('click','.check_button',function(){
    	$(this).parent().addClass("completed");
    	$(this).siblings().css("color","#fff");
    	$(this).css("color","#fff");
    });
});
