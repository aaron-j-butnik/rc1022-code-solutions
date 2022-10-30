/* exported swapChars */

/* Pseudo Code

1. Function definition named swapChars with three parameters, (firstIndex, secondIndex, string).
2. Assign the method split of the string object called with one argument, empty string('') to the variable stringArr.
3. Assign an empty array literal to the variable swapChar.
4. Assign variable stringArr at index firstIndex to variable swapChar.
5. Assign variable stringArr at index secondIndex to variable stringArr at index firstIndex.
6. Assign variable swapChar to variable stringArr at index secondIndex.
7. Return the join method of the stringArr object being called with one argument, empty string ('').

*/

function swapChars(firstIndex, secondIndex, string) {
  var stringArr = string.split('');
  var swapChar = [];

  swapChar = stringArr[firstIndex];
  stringArr[firstIndex] = stringArr[secondIndex];
  stringArr[secondIndex] = swapChar;

  return stringArr.join('');
}
