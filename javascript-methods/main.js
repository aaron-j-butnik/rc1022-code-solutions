var num1 = 3;
var num2 = 6;
var num3 = 9;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

var heros = ['A-Train', 'The Deep', 'Black Noir', 'Homelander'];
var randomNumber = heros.length * Math.random();
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heros[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Hyperion',
    author: 'Dan Simmons'
  },
  {
    title: 'Hail Mary',
    author: 'Andy Weir'
  },
  {
    title: 'Neuromancer',
    author: 'William Gibson'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, [1]);
console.log('value of library', library);

var fullName = 'Aaron Butnik';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
