/* exported getWords */

/* Pseudo Code:
  Goal: Return an array with a string.  Each string returned is one of the words in the string parameter.

  1. Set up 'if' conditional statement.
  2. Check condition if string parameter is stickly equal to an empty string.
  3. If condition is met return split method of the string object that calls one argument that is the string parameter.
  4. If condition is not met, return split method of the string object that calls the argument of a string with a space.
*/

function getWords(string) {
  if (string === '') {
    return string.split(string);
  } else {
    return string.split(' ');
  }
}
