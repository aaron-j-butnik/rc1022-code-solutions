/* exported isUpperCased */

/* Pseudo Code:
  Goal: Return a Boolean indcating whether or not all characters in parameter are uppercased.
  1. Function definition named isUpperCased, with one parameter.
  2. Use 'if' conditional statement.
  3. 'If' condition: parameter is strickly equal to the method toUpperCase with no arguments at parameter.
  3. Return true.
  5. Else, return false.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
