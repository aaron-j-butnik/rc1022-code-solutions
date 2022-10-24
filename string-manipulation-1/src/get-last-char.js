/* exported getLastChar */

/* Pseudo Code:
  1. Goal: Get last character of the string.
  2. Use length property of string.
  3. Get value of length property of string minus 1, within bracket notation.
  4. Retun string at index of result of previous expression.
*/

function getLastChar(string) {
  return string[string.length - 1];
}
