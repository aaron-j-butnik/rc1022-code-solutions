/* exported ransomCase */

/* Pseudo Code

1. Function definition named ransomCase with one parameter (string).
2. Empty array literal assigned to variable strArr
3. 'for-loop', initialization: 0 assigned to var i;
4. 'for-loop', condition: var i less than length of string object;
5. 'for-loop', final expression: var i increments by one;
6. 'If' statement, condition: var i modulus 2 is strickly equal to zero.  This checks for even or odd character in string.
7. if condition is odd character: push method of strArr object is called with one argument, toLowerCase() method of the split() method of the string object, being called with one argument 'empty string' at index i.
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
