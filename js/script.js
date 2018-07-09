// creating an array of JavaScript objects to hold the data for the quotes.
var quotes = [

  {

    quote: "The assumption that what currently exists must necessarily exist is the acid that corrodes all visionary thinking.",
    source: "Murray Bookchin",
    citation: "The Meaning of Confederalism",
    year: 1990

  },

  {

    quote: "Men make their own history, but they do not make it as they please; they do not make it under self-selected circumstances, but under circumstances existing already, given and transmitted from the past.",
    source: "Karl Marx",
    citation: "The Eighteenth Brumaire of Louis Bonaparte",
    year: 1852

  },

  {
    quote: "The only way to get good at solving problems is to solve them.",
    source: "Seth Godin",

  },

  {
    quote: "Read some good, heavy, serious books just for discipline: Take yourself in hand and master yourself.",
    source: "W.E.B. Du Bois"

  }

];


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
