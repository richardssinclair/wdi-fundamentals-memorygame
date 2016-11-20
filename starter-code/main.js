console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


if (cardOne == cardThree) {
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}

var createCards = function () {

  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < 4; i++ ) {
    console.log('HELLO'+i);


    var newCardItem = document.createElement('div');

    newCardItem.className = 'card'

    gameBoard.appendChild(newCardItem);

  }
}

createCards()
