$(document).ready(function(){
	let randomValue;
	$('.custom_btn').click(function(){

		fetch('https://api.quotable.io/random')
	  .then(response => response.json())
	  .then(data => {
			randomValue = data.content;
			fetch(`https://source.unsplash.com/600x600/?nature`).then((response) => {
    	  var url = `${response.url}`;
				$(".custm_img").attr("src",url);
				$('#quote').html('"' +  randomValue + '"');
			 	$("#quote").show();
			 	$(".add_btns").show();
  		});
			});

	  });

		$("#myBtn").click(function(){
		const node = document.getElementById("post_section");
		const scale = 600 / node.offsetWidth;
		this.shot_loading = true;

		domtoimage
		.toPng(node, {
		    height: node.offsetHeight * scale,
		    width: node.offsetWidth * scale,
		    style: {
		    transform: "scale(" + scale + ")",
		    transformOrigin: "top left",
		    width: node.offsetWidth + "px",
		    height: node.offsetHeight + "px"
		    }
		})
		.then(dataUrl => {
		    this.baseData = dataUrl;
		    this.shot_loading = false;
				var link = document.createElement('a');
		    link.download = 'my-post.png';
		    link.href = dataUrl;
		    link.click();
		})
		.catch(error => {
		    this.shot_loading = false;
		    console.error("oops, something went wrong!", error);
		});
	});
	});
