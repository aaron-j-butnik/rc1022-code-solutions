console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Ben',
    hand: []
  },
  {
    name: 'Joe',
    hand: []
  },
  {
    name: 'Tom',
    hand: []
  },
  {
    name: 'Bill',
    hand: []
  }
];

var deck = [];

var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];

function createDeck(ranks, suits) {
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({
        rank: ranks[i],
        suit: suits[j]
      });
    }
  }
}
createDeck(ranks, suits);

console.log(deck);

function shuffleDeck(deck) {
  return _.shuffle(deck);
}
var shuffledDeck = shuffleDeck(deck);
console.log(shuffledDeck);

function dealTwoCards() {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      players[i].hand.push(shuffledDeck[j]);
      shuffledDeck.splice(0, 2);
    }
  }
}
dealTwoCards();
console.log(players);

// function determineWinner(players) {

// }
