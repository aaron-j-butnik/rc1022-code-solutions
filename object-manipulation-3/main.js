console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
var benScore = 0;
var joeScore = 0;
var tomScore = 0;
var billScore = 0;

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

      if (players[i].name === 'Ben') {
        if (playerCards === 'Ace') {
          benScore += 11;
        } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
          benScore += 10;
        } else {
          benScore += Number(playerCards);
        }
      }
      if (players[i].name === 'Joe') {
        if (playerCards === 'Ace') {
          joeScore += 11;
        } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
          joeScore += 10;
        } else {
          joeScore += Number(playerCards);
        }
      }
      if (players[i].name === 'Tom') {
        if (playerCards === 'Ace') {
          tomScore += 11;
        } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
          tomScore += 10;
        } else {
          tomScore += Number(playerCards);
        }
      }
      if (players[i].name === 'Bill') {
        if (playerCards === 'Ace') {
          billScore += 11;
        } else if (playerCards === 'Jack' || playerCards === 'Queen' || playerCards === 'King') {
          billScore += 10;
        } else {
          billScore += Number(playerCards);
        }
      }
    }
  }
}
getScores(players);

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
