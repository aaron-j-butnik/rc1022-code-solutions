/* exported capitalize */

/* Pseudo Code:
  Goal: Return original word with only first character uppercase.
  1. Use the toUpperCase method with no arguments of parameter string at index zero.
  2. Use toLowerCase method with no arguments of slice method with one argument (1) of parameter string.
  3. Concatenate.
  4. Return string.
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
