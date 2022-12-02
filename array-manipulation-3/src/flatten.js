/* exported flatten */

/*
1. Assigne empty array literal to var result.
2. Return concat method of the result object being called with argument spread of array variable.

*/

function flatten(array) {
  var result = [];
  return result.concat(...array);
}
