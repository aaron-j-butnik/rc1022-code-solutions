const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers => numbers.reduce((acc, currentVal) => acc + currentVal, 0);
console.log(sum(numbers));

const product = numbers => numbers.reduce((acc, currentVal) => acc * currentVal, 1);
console.log(product(numbers));

const balance = account => account.reduce((acc, currentVal) => currentVal.type === 'deposit' ? acc + currentVal.amount : acc - currentVal.amount, 0);
console.log(balance(account));

const composite = traits => traits.reduce((acc, currentVal) => Object.assign(acc, currentVal));
console.log(composite(traits));
