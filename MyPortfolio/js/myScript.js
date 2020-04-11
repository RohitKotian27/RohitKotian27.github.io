$(document).ready(function(){
	$('.tick').on('change',function(){
		if($(this).is(':checked')){
			$('.customText').fadeIn(500);
		}
		else{
			$('.customText').fadeOut(500);
		}
	});
	$('.customText').trigger('change');

	/*Accordian JS Starts here*/
	$(".btn_down").click(function(){
		$(this).toggleClass("trnsfrm_180");
		$(this).parent().next().slideToggle(500);
	});
	/*Accordian JS ends here*/
});
