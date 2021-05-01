$(document).ready(function(){
	let randomValue;
	$('.custom_btn').click(function(){

		fetch('https://api.quotable.io/random')
	  .then(response => response.json())
	  .then(data => {
			randomValue = data.content;
			fetch(`https://source.unsplash.com/280x280/?nature`).then((response) => {
    	  var url = `${response.url}`;
				$(".custm_img").attr("src",url);
				$('#quote').html('"' +  randomValue + '"');
			 	$("#quote").show();
			 	$(".add_btns").show();
  		});
			});

	  });

		$("#myBtn").click(function(){
			domtoimage.toPng(document.getElementById('post_section'), { quality: 1.0 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-post.png';
        link.href = dataUrl;
        link.click();
    });
	});
	});
