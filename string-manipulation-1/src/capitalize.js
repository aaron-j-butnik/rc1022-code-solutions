/* exported capitalize */

/* Pseudo Code:
  Goal: Return original word with only first character uppercase.
  1. Isolate first character with string at index 0 and make  uppercase.
  2. Isolate all characters after string at index 0 and make lowercase.
  3. Join together string.
  4. Return string.
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
