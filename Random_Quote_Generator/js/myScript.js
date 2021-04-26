$(document).ready(function(){
	let randomValue;
	$('.custom_btn').click(function(){
		fetch('https://api.quotable.io/random')
	  .then(response => response.json())
	  .then(data => {
			randomValue = data.content;
	    $('#quote').html('"' +  randomValue + '"');
	  });
	});
});
