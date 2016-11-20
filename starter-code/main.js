var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [ ];

var createBoard = function () {
    var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++) {

      var cardElement = document.createElement('div');

    cardElement.setAttribute('data-card', cards[i]);

        cardElement.className = 'card'

        gameBoard.appendChild(cardElement);

        cardElement.addEventListener('click', isTwoCards)
}
}
createBoard()

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];
  }
}
function isMatch(cardsInPlay) {
  console.log(cardsInPlay);

if (cardsInPlay[0] == cardsInPlay[1]) {
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
}
