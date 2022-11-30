
let count = 3;
const intervalID = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
