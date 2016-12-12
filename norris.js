var quotes = document.getElementById("quotes");
var button = document.querySelector("button");

function getQuote() {
	
	var request = new XMLHttpRequest();
		request.open('GET', 'http://api.icndb.com/jokes/random/', true);
		request.send();
	request.onload = function(){
		
		if (request.status >= 200 && request.status < 400){
			var data = JSON.parse(request.responseText)
			
		    var joke = data.value.joke;
		    // console.log(data);
		    // console.log(joke);
		     quotes.innerHTML = joke;
		     document.getElementsByTagName('h1')[0].style.visibility = 'hidden';
		}
	};
		
		
}

// var request = new XMLHttpRequest();
// request.open('GET', 'http://api.icndb.com/jokes/random/', true);


// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText) //.replace(/&quot;/g,'"'));  	//(request.responseText);
//     var joke = data.value.joke;
//     console.log(data);
//     console.log(joke);
//      quotes.innerHTML = joke;  //replace(/&quot;/g, '\\"');//
//     button.addEventListener("click", function(){
//    		// quotes.textContent = joke;
//    		//document.getElementById("quotes").innerHTML = getQuote();
// 		window.location.reload();
// 		});
		
//   } else {
//     // We reached our target server, but it returned an error
//   }
// };
// request.onerror = function() {
//  	console.log("Error"); // There was a connection error of some sort
// };
// request.send();


// request.onclick = function getQuote(){
// 	request.open('GET', 'http://api.icndb.com/jokes/random/', true);
// 	request.send();
// 	var data = JSON.parse(request.responseText);
//     var joke = data.value.joke;
//      button.addEventListener("click", function(){
//    		quotes.innerHTML = joke;
		
// 		});
// }


// function getNewQuoteK(){
// 	var askNewQuote = new XMLHttpRequest();
// 	askNewQuote.onclick('GET', 'http://api.icndb.com/jokes/random/', true);
// }

// var api = "http://api.icndb.com/jokes/random/";
	
// function getNewJoke(api, callback){
// 	var request = new XMLHttpRequest();
// 	request.onreadystatechange = function(){
// 		if (request.readyState == 4 && request.status == 200) { // Success!
// 			// callback(request.responseText);
//    //  		var data = JSON.parse(request.responseText);
//    //  		var joke = data.value.joke;
//    //  		console.log(joke);
// 	}
// 	request.open('GET', api, true);
// 	request.send(null);
// };