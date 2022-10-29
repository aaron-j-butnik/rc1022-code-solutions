/* exported ransomCase */

/* Pseudo Code

1. Function definition named ransomCase with one parameter (string).
2. for loop
3. conditional if odd lowerCase(), if even toUpperCase()
4. return

*/

function ransomCase(string) {
  var strArr = [];
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      strArr.push(string.split('')[i].toLowerCase());
    } else {
      strArr.push(string.split('')[i].toUpperCase());
    }
  }
  return strArr.join('');
}

// }
// console.log(strArr);
