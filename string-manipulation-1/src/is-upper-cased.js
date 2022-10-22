/* exported isUpperCased */

/* Pseudo Code:
  Goal: Return a Boolean indcating whether or not all characters in parameter are uppercased.
  1. Check if all char is uppercase.
  2. If no, return false.
  3. If yes, return true.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
