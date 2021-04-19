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

	// Send Email Functionality
	$("#form_Submit").click(function(){
		let myName = $("#yourName").val();
		let myNumber = $("#yourNumber").val();
		let myEmail = $("#yourEmail").val();
		let myorganization = $("#yourOrganization").val();
		let myMessage = $("#yourMessage").val();

		if(myName == ""){
			$("#yourName").css("borderColor","Red");
			$("#yourName").attr("placeholder","Please fill out this field");
			$("#yourName").focus();
		}
		else if(myNumber == ""){
			$("#yourName").css("borderColor","black");
			$("#yourNumber").css("borderColor","Red");
			$("#yourNumber").attr("placeholder","Please fill out this field");
			$("#yourNumber").focus();
		}
		else if(myEmail == ""){
			$("#yourNumber").css("borderColor","Black");
			$("#yourEmail").css("borderColor","Red");
			$("#yourEmail").attr("placeholder","Please fill out this field");
			$("#yourEmail").focus();
		}
		else{
			$("#yourEmail").css("borderColor","Black");
			let myData = `
			Name : ${myName}
			Number : ${myNumber}
			Email : ${myEmail}
			Organization : ${myorganization}
			Message : ${myMessage}`;

			console.log(myData);

			location.href = "mailto:rohitkotian07@gmail.com?subject=User Queries &body=" + myData;
			alert("Thank You! For getting in touch with me. Will get back to you at the earliest.");
		}
	});
});
