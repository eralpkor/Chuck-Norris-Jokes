// @Author Eralp Korucubasi
// Date today
var quotesFrom = 'https://goo.gl/amwwAz'

function getQuote() {
	var quotes = document.getElementById("quotes");
	var request = new XMLHttpRequest();
		request.open('GET', 'https://api.icndb.com/jokes/random/', true);
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


document.getElementById('shareQuote').onclick = function() {
	var shareQuote = document.getElementById('quotes').textContent;
	window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareQuote + '\n' + quotesFrom));
};

