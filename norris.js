var quotes = document.getElementById("quotes");
// var button = document.querySelector("button");

function getQuote() {
	
	var request = new XMLHttpRequest();
		request.open('GET', 'http://api.icndb.com/jokes/random/', true);
		request.send(null);
	request.onload = function(){
		
		if (request.status >= 200 && request.status < 400){
			var data = JSON.parse(request.responseText);
		    var joke = data.value.joke;
		     quotes.innerHTML = joke;
		     document.getElementsByTagName('h1')[0].style.visibility = 'hidden';
		}else{ 
			document.getElementById("quotes").innerHTML = "Sorry but something went wrong";
		}
	};
}

