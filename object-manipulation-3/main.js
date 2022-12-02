console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];

var players = [
  {
    name: 'Ben',
    hand: [],
    score: 0
  },
  {
    name: 'Joe',
    hand: [],
    score: 0
  },
  {
    name: 'Tom',
    hand: [],
    score: 0
  },
  {
    name: 'Bill',
    hand: [],
    score: 0
  }
];

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

function shuffleDeck(deck) {
  return _.shuffle(deck);
}
var shuffledDeck = shuffleDeck(deck);

function dealTwoCards() {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      players[i].hand.push(shuffledDeck[j]);
      shuffledDeck.splice(0, 2);
    }
  }
}
dealTwoCards();

function getScores(players) {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].hand.length; j++) {
      var playerCards = players[i].hand[j].rank;
      if (playerCards === 'Ace') {
        players[i].score += 11;
      } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
        players[i].score += 10;
      } else {
        players[i].score += Number(playerCards);
      }
    }
  }
}
getScores(players);

var benScore = players[0].score;
var joeScore = players[1].score;
var tomScore = players[2].score;
var billScore = players[3].score;

console.log('Ben Score:', benScore);
console.log('Joe Score:', joeScore);
console.log('Tom Score:', tomScore);
console.log('Bill Score:', billScore);

function determineWinner(ben, joe, tom, bill) {
  if (ben > joe && ben > tom && ben > bill) {
    console.log('Ben is the Winner');
  } else if (joe > ben && joe > tom && joe > bill) {
    console.log('Joe is the Winner');
  } else if (tom > joe && tom > ben && tom > bill) {
    console.log('Tom is the Winner');
  } else if (bill > joe && bill > tom && bill > ben) {
    console.log('Bill is the Winner');
  } else {
    console.log('We have a tie');
  }
}
determineWinner(benScore, joeScore, tomScore, billScore);
