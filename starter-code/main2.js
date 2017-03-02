var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [] ;

var gameBoard = document.getElementById('game-board');

function createBoard() {
  // shuffle cards in random - (just want to display a different)
  // just do an extra work...
  shuffle(cards);

  //loop - add four card elements
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    cardElement.innerHTML = "<img src='image/blankCard.jpg'>";
    gameBoard.appendChild(cardElement);

  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
    //this.innerHTML = cardsInPlay.push(this.getAttribute('data-card'));
    this.innerHTML ="<img src='image/king.jpg'>"; // king
  } else {
    //this.innerHTML = cardsInPlay.push(this.getAttribute('data-card'));
    this.innerHTML = "<img src='image/queen.jpg'>"; //queen
  }
  if (cardsInPlay.length > 1) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}
document.querySelector('.btn-new').addEventListener('click', function() {
  var classNameCards = document.getElementsByClassName("card");
  for (var i = 0; i < classNameCards.length; i++) {
    classNameCards[i].innerHTML = "<img src='image/blankCard.jpg'>";
  }
  shuffle(cards);
  cardsInPlay = [];
});


function isMatch(cards) {
  // alert winning message
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i]);
  }
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
} ;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


createBoard();
