$(document).ready(function(){
	$('.myform').on('click','.myBtn',function(){
		var myValue = $('.inp1').val();
		if(myValue == ""){
			alert("This field can't be kept empty!");
			$('.inp1').focus();
		}
		else{ 	
			var result = '<div class="mytext">\
						<div class="fa fa-trash-o del_btn"></div>' + myValue + '</div>';
		    $('.myList').append(result);
		    $('.inp1').val("");
	}
	});

	$('.myList').on('click','.del_btn',function(){
		$(this).parent().fadeOut(1000);
	});

    $('.myList').on('dblclick','.mytext',function(){
    	$(this).addClass("completed");
    	$(this).children().css("color","#fff");
    });
});
