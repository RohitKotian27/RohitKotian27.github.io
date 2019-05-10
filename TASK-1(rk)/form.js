
//localStorage.clear();

	var first=document.getElementById('One');
	var second=document.getElementById('Two');
	var third=document.getElementById('Three');
	var fourth=document.getElementById('Four');
	var value;




function firsttwo(){
	localStorage.clear();
	localStorage.setItem("Value1",first.value);
	localStorage.setItem("Value2",second.value);
	
}

function lasttwo(){

	localStorage.setItem("Value3",third.value);
	localStorage.setItem("Value4",fourth.value);

	/*window.location= 'third.html';*/

}


	document.getElementById("result_1").innerHTML='Value 1: '+ localStorage.getItem("Value1");
   	document.getElementById("result_2").innerHTML='Value 2: '+ localStorage.getItem("Value2");
   	document.getElementById("result_3").innerHTML='Value 3: '+ localStorage.getItem("Value3");
    document.getElementById("result_4").innerHTML='Value 4: '+ localStorage.getItem("Value4");





 
