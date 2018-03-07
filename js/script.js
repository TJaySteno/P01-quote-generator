// When button is pressed, new quote will load
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// List of quotes to be printed
const quotes = [
	{
		quote: "Cats have a scam going - you buy the food, they eat the food, they go away; that's the deal.",
		source: "Eddie Izzard",
		citation: "Unrepeatable",
		date: "1994",
		topic: "humor"
	},
	{
		quote: "I failed kindergarden because I couldn't spell my last name.",
		source: "Zach Galifianakis",
		citation: "Live at the Purple Onion",
		date: "2007",
		topic: "humor"
	},
	{
		quote: "Years of love have been forgot, in the hatred of a minute",
		source: "Edgar Allen Poe",
		citation: "To M—",
		date: "1829",
		topic: "love"
	},
	{
		quote: "Forgive others, not because they deserve forgiveness, but because you deserve peace.",
		source: "Jonathan Lockwood Huie",
		topic: "peace"
	},
	{
		quote: "History is a set of lies agreed upon.",
		source: "Napolean",
		topic: "history"
	},
	{
		quote: "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently",
		source: "Friedrich Nietzsche",
		citation: "The Dawn of Day",
		date: "1881",
		topic: "politics"
	},
	{
		quote: "If they can get you asking the wrong questions, they don't have to worry about answers.",
		source: "Thomas Pynchon",
		citation: "Gravity's Rainbow",
		date: "1973",
		topic: "politics"
	},
	{
		quote: "A man can love as many times as his heart is willing to be broken.",
		source: "Unknown",
		topic: "love"
	}
]

// Generate a random number and return that index's value from the 'quotes' array
function getRandomQuote () {
	const id = Math.floor(Math.random() * quotes.length);
	return quotes[id];
}

// Display a new quote on the page
function printQuote () {
	// Store random quote from array
	const newQuote = getRandomQuote();

	// Store quote as a readable message using all available information
	let message = `<p class="quote">${newQuote.quote}</p><p class="source">${newQuote.source}`;
	if (newQuote.citation) { message += `<span class="citation">${newQuote.citation}</span>` };
	if (newQuote.date) { message += `<span class="date">${newQuote.date}</span>` };
	message += '</p>';

	// Write message to the page
	document.querySelector("#quote-box").innerHTML = message;

	// Change colors based on topic
	const body = document.querySelector("body");
	const button = document.querySelector("button");
	switch (newQuote.topic) {
		case "humor":
			body.style.backgroundColor = '#8fb536';
			button.style.backgroundColor = '#8fb536';
			break;
		case "love":
			body.style.backgroundColor = '#b55c36';
			button.style.backgroundColor = '#b55c36';
			break;
		case "peace":
			body.style.backgroundColor = '#5c36b5';
			button.style.backgroundColor = '#5c36b5';
			break;
		case "history":
			body.style.backgroundColor = '#b5368f';
			button.style.backgroundColor = '#b5368f';
			break;
		case "politics":
			body.style.backgroundColor = '#36b59c';
			button.style.backgroundColor = '#36b59c';
			break;
		default:
			body.style.backgroundColor = '#36b55c';
			button.style.backgroundColor = '#36b55c';
			break;
	}
}

// Print a new quote every 20 seconds
window.setInterval(printQuote, 20000);
