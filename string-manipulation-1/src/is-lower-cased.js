/* exported isLowerCased */

/* Pseudo Code
  Goal: A Boolean indicating whether or not all char in parameter are lowercased.

  1. Function definition named isLowerCased with one parameter.
  2. Make conditional 'if' statement.
  3 In condition set parameter strickly equal to method toLowerCase with no arguments at parameter.
  4. If condition is met, return true.
  5. If condition is not met, return false.
*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
