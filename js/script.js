// creating an array of JavaScript objects to hold the data for the quotes.
var quotes = [

  {

    quote: 'The assumption that what currently exists must necessarily exist is the acid that corrodes all visionary thinking.',
    source: 'Murray Bookchin',
    citation: 'The Meaning of Confederalism',
    year: 1990,
    tag: 'politics'

  },

  {

    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    source: 'Karl Marx',
    citation: 'Theses On Feuerbach',
    year: 1888,
    tag: 'politics'

  },

  {
    quote: 'The only way to get good at solving problems is to solve them.',
    source: 'Seth Godin',
    tag: 'motivation'

  },

  {

    quote: 'Read some good, heavy, serious books just for discipline: Take yourself in hand and master yourself.',
    source: 'W.E.B. Du Bois',
    tag: 'motivation'

  },

  {

    quote: 'Compassion is the radicalism of our time.',
    source: 'His Holiness, the Dalai Lama',
    tag: 'religion'
  }

];


//creating a function, getRandomQuote, which selects a random quote object from the quotes array and returns the randomly selected quote object.

var getRandomQuote = function () {

  var max = quotes.length;

//generating a random number from 0 to 3 for the index of the quote object and returning the selected object

  var randomQuoteIndex = Math.floor( Math.random() * max );

  return quotes[randomQuoteIndex];

};

//creating a function named randomBgColor which changes the background to a random color

var randomBgColor = function () {

// generating random numbers to set the rgb colors of the background color

  var red = Math.floor( Math.random() * 256 );
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );

//creating bgColor variable with the randomly generated rgb numbers as its values

  var bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

//sets background color of the body of the page to bgColor

  document.body.style.background = bgColor;

//sets background color of the loadQuote button to bgColor

  document.getElementById('loadQuote').style.background = bgColor;

};

//creating a function named printQuote which calls getRandomQuote and outputs to an html string

var printQuote = function () {

  var quote = getRandomQuote();

//creating variable to hold html string

  var html = `<p class="quote"> ${quote.quote}</p>`;
  html += `<p class="source"> ${quote.source}`;

// conditionals below to check if the object in the quote array has a citation, year, and tag, then printing them out if they do.

  if (quote.citation) {

    html += `<span class="citation"> ${quote.citation} </span>`;

  };

  if (quote.year) {

    html += `<span class="year"> ${quote.year} </span>`;

  };

  if (quote.tag) {

    html += `<span class="tag"> ${quote.tag} </span>`;

};
    html += '</p>'

//adding the html to the quote-box

  document.getElementById('quote-box').innerHTML = html;

//changing the background color

  randomBgColor();

};

//setting an automatic refresh for the quote-box every five seconds.
//TODO: figure out how to make the quoteTimer reset when the button is clicked

var quoteTimer = setInterval (printQuote, 5000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
