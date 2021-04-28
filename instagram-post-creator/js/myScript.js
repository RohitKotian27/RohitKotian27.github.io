$(document).ready(function(){
	let randomValue;
	let copiedValue;
	let count = 1;
	$('.custom_btn').click(function(){
		fetch('https://api.quotable.io/random')
	  .then(response => response.json())
	  .then(data => {
			randomValue = data.content;
			count += 1;
			var url = `https://picsum.photos/280/280?blur=1&random=${count}`
			$(".custm_img").attr("src",url);
	    $('#quote').html('"' +  randomValue + '"');
			$("#quote").show();
			// $(".add_btns").show();
			});
	  });
	});
