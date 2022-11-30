const add = require('./add');

const x = Number(process.argv[2]);
const operation = process.argv[3];
const y = Number(process.argv[2]);

if (operation === 'plus') {
  console.log('result:', add(x, y));
}
