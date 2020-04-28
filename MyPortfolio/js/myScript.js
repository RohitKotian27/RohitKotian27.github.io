$(document).ready(function(){
	$('.tick').on('change',function(){
		if($(this).is(':checked')){
			$('.customText').fadeIn(1000);
		}
		else{
			$('.customText').fadeOut(1000);
		}
	});
	$('.customText').trigger('change');

	/*Accordian JS Starts here*/
	$(".btn_down").click(function(){
		$(this).toggleClass("trnsfrm_180");
		$(this).parent().parent().prev().slideToggle(700);
	});
	/*Accordian JS ends here*/
});
