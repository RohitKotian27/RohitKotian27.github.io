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

	/*Type Writer Effect*/

	var app = document.getElementById('myMessage');

	var typewriter = new Typewriter(app, {
	    loop: true
	});

	typewriter.typeString()
		.start()
	    .pauseFor(500)
	    .typeString('Web Developer')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('Web Designer')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('Innovator')
	    .pauseFor(2500)
	    .deleteAll()

	/*Type Writer Effect JS Ends*/
	
	/*Desktop Navigation Link Animation Scroll*/
	$(".projects").click(function(event){
		$('body,html').animate({
			scrollTop : $("#Projects").offset().top
		},600);
	});
	$(".myinfo").click(function(event){
		$('body,html').animate({
			scrollTop : $("#About").offset().top
		},600);
	});
	$(".contactMe").click(function(event){
		$('body,html').animate({
			scrollTop : $("#GetInTouch").offset().top
		},600);
	});
	/*Desktop Navigation Link Animation Scroll*/    
});
