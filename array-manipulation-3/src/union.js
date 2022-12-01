/* exported union */

/*
1. Array literal containing spread of first object, and spread of second object assigned to variable arr.
2. Return array of spread of instance of Set object with value or arr variable.
*/
function union(first, second) {
  var arr = [...first, ...second];
  return [...new Set(arr)];
}
