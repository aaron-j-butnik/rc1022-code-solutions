const fs = require('fs');

const randNum = String(Math.random());
fs.writeFile('random.txt', randNum + '\n', 'utf8', err => {
  if (err) throw err;
});
