const addTwoNums = require('./add');
const subTwoNums = require('./subtract');
const multiplyTwoNums = require('./multiply');
const divideTwoNums = require('./divide');

const x = Number(process.argv[2]);
const operation = process.argv[3];
const y = Number(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', addTwoNums(x, y));
} else if (operation === 'minus') {
  console.log('result:', subTwoNums(x, y));
} else if (operation === 'multiply') {
  console.log('result:', multiplyTwoNums(x, y));
} else if (operation === 'divide') {
  console.log('result:', divideTwoNums(x, y));
} else {
  console.log('Please enter a valid operation');
}
