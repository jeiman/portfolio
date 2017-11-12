	function showTheTime() {
		var s = moment().tz("Asia/Kuala_Lumpur").format('hh:mm:ss a');    
		document.getElementById("clock").innerHTML = s;
	}

showTheTime(); // for the first load
setInterval(showTheTime, 250); // update it periodically