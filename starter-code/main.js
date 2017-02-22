console.log("JS file is connected to HTML! Woo!")

// var cardOne = 'Queen' ;
// var cardTwo = 'Queen' ;
// var cardThree = 'King' ;
// var cardFour = 'King' ;
var cards = ['queen', 'queen', 'king', 'king'];
var gameBoard = document.getElementById('game-board');
console.log(gameBoard);
function createCards() {
  //loop - add four card elements
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    gameBoard.appendChild(cardElement);
  }
}

createCards();

// if(cardOne === cardTwo || cardThree === cardFour) {
//   alert('You found a match')
// } else {
//   alert('Sorry, try again.')
// }
