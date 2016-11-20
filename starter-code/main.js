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

   var card = this.getAttribute('data-card');

       if (card == "queen"){
           this.innerHTML = "<img src='Dama.png'>"
         }
           else {
              this.innerHTML = "<img src='Rei.png'>"
         }

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];
    var allCard = document.getElementsByClassName('card')
      for (var i = 0; i < allCard.length; i++) {
        allCard [i].innerHTML = ""
      }
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
