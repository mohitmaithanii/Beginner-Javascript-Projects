// The API URL for fetching random quotes
const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// An asynchronous function to fetch a random quote from the API
async function getQuote(url) {
	const response = await fetch(url);

	let data = await response.json();
	quote.innerHTML = data.content;
	author.innerHTML = data.author;
}
getQuote(apiUrl);

function tweet() {
	// Open a new window with the tweet URL
	window.open(
		// Construct the URL for tweeting the current quote
		"https://twitter.com/intent/tweet?text=" + quote.innerHTML,
		"Tweet Window",
		"width=600",
		"height=300"
	);
}
