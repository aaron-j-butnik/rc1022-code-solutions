/* exported reverseWord */

/* Pseudo Code:
  Goal: Return a string containing the characters of the parameter in reverse order.

  1. Declare a variable and assign an empty string as the value.
  2. Use a 'for-loop'.
  3. Set initialization equal to the length of the parameter minus 1.
  4. Set condition of 'for-loop' to be greater than or equal to 0.
  5. Set final expression to decrement after each iteration.
  6. In the 'for-loop' code block, use the addition assignment operator to concatenate and assign the parameter at i to the variable assigned with the empty string.
*/

function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
