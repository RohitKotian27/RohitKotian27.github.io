	   var myAudio = document.getElementById("myAlarm");	
		function fetch(){
			var hh = document.getElementById("hours").value;
			var mm = document.getElementById("minutes").value;
			var timing = document.getElementById("timing").value;
			var alarm = hh + ":" + mm + " " + timing;
			if(hh == "null" || mm == "null" || timing == "null"){
				alert("Sorry You Cannot keep the fields empty");
			}
			else{
				alert("Alarm has been Set");
				setInterval(compare,60000);
			}

			function compare(){
				var date = new Date();
				var mytime = date.toLocaleTimeString();
				var mytimeinhr = mytime.replace(/:\d+ /, ' ');
				if(mytimeinhr == alarm){
					console.log("Timing is matched");
					document.getElementById("myAlarm").style.display = "block";
					enableAutoplay();
					enableLoop();
				}
				else{
					console.log("Timing isn't matched");
				}
			}
		}

		function showTime(){
		var date = new Date();
		var time = date.toLocaleTimeString();
		document.getElementById("timeNow").innerHTML = time;
	 	}
	 	setInterval(showTime,1000);

	 	function enableLoop() { 
	 	  myAudio.loop = true;
	 	  myAudio.load();
	 	}

	 	function enableAutoplay() { 
	 	  myAudio.autoplay = true;
	 	  myAudio.load();
	 	} 
