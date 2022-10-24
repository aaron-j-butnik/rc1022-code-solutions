/* exported getWords */

/* Pseudo Code:
  Goal: Return an array with a string.  Each string returned is one of the words in the string parameter.

  1. Function definition named getWords with one parameter.
  2. Set up 'if' conditional statement.
  3. Check condition if string parameter is stickly equal to an empty string.
  4. If condition is met return split method of the string object that calls one argument with parameter.
  5. If condition is not met, return split method of the string object that calls the argument of a string with a space.
*/

function getWords(string) {
  if (string === '') {
    return string.split(string);
  } else {
    return string.split(' ');
  }
}
