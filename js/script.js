// creating an array of JavaScript objects to hold the data for the quotes.
var quotes = [

  {

    quote: "The assumption that what currently exists must necessarily exist is the acid that corrodes all visionary thinking.",
    source: "Murray Bookchin",
    citation: "The Meaning of Confederalism",
    year: 1990

  },

  {

    quote: "The philosophers have only interpreted the world, in various ways; the point is to change it.",
    source: "Karl Marx",
    citation: "Theses On Feuerbach",
    year: 1888

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


//creating a function, getRandomQuote, which selects a random quote object from the quotes array and returns the randomly selected quote object.

var getRandomQuote = function () {

  var max = quotes.length;

  var randomQuoteIndex = Math.floor( Math.random() * max );
  return quotes[randomQuoteIndex];
};

//Creating a function named printQuote which calls getRandomQuote and outputs to an html string

var printQuote = function () {

  var quote = getRandomQuote();
  var html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;

  if (quote.citation) {

    html += '<span class="citation">' + quote.citation + '</span>';

  };

  if (quote.year) {

    html += '<span class="year">' + quote.year + '</span>';

  };

  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;


};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
