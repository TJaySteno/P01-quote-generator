// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create a list of quotes to be printed
const quotes = [
	{
		quote: "Cats have a scam going - you buy the food, they eat the food, they go away; that's the deal.",
		source: "Eddie Izzard",
		citation: "Unrepeatable",
		year: "1994",
		tag: "humor"
	},
	{
		quote: "I failed kindergarden because I couldn't spell my last name.",
		source: "Zach Galifianakis",
		citation: "Live at the Purple Onion",
		year: "2007",
		tag: "humor"
	},
	{
		quote: "Years of love have been forgot, in the hatred of a minute",
		source: "Edgar Allen Poe",
		citation: "To M—",
		year: "1829",
		tag: "love"
	},
	{
		quote: "Forgive others, not because they deserve forgiveness, but because you deserve peace.",
		source: "Jonathan Lockwood Huie",
		tag: "peace"
	},
	{
		quote: "History is a set of lies agreed upon.",
		source: "Napolean",
		tag: "history"
	},
	{
		quote: "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently",
		source: "Friedrich Nietzsche",
		citation: "The Dawn of Day",
		year: "1881",
		tag: "politics"
	},
	{
		quote: "If they can get you asking the wrong questions, they don't have to worry about answers.",
		source: "Thomas Pynchon",
		citation: "Gravity's Rainbow",
		year: "1973",
		tag: "politics"
	},
	{
		quote: "A man can love as many times as his heart is willing to be broken.",
		source: "Unknown",
		tag: "love"
	}
]

// return a random number that will associate with an index in the 'quotes' array
function getRandomQuote () {
	const id = Math.floor(Math.random() * quotes.length);
	return quotes[id];
}

// display a random quote from above onto the page
function printQuote () {
	// get random number
	const newQuote = getRandomQuote();

	let message = `<p class="quote">${newQuote.quote}</p><p class="source">${newQuote.source}`;
	if (newQuote.citation) { message += `<span class="citation">${newQuote.citation}</span>` };
	if (newQuote.year) { message += `<span class="year">${newQuote.year}</span>` };
	message += '</p>';

	document.querySelector("#quote-box").innerHTML = message;
}
