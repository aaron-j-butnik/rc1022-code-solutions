/* exported isLowerCased */

/* Pseudo Code
  Goal: A Boolean indicating whether or not all char in parameter are lowercased.
  1. Make conditional 'if' statement.
  2. In condition set parameter strickly equal to parameter to lowercase.
  3. If condition is met, return true.
  4. If condition is not met, return false.
*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
