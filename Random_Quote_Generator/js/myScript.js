$(document).ready(function(){
	let randomValue;
	let copiedValue;
	$('.custom_btn').click(function(){
		fetch('https://api.quotable.io/random')
	  .then(response => response.json())
	  .then(data => {
			randomValue = data.content;
			$("#quote").show();
	    $('#quote').html('"' +  randomValue + '"');
			$(".add_btns").show();
			$("#myInput").val(randomValue);
			});
	  });

		// Copy Button code goes here
		$("#myBtn").click(function(){
				//To select the text
				alert("Text has been copied");
				$("#myInput").attr("type","text");
				$("#myInput").select();
				document.execCommand("Copy");
				$("#myInput").attr("type","hidden");
		});
	});
