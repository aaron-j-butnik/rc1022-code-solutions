/* exported invert */

/* Pseudo Code:

1. Define function named invert with one parameter (source).
2. Assign empty object literal to variable newObj.
3. 'for...in' loop - Variable prop in source object.
4. Assign variable prop to newObj object at source object at variable prop.
5. Return newObj object.

*/

function invert(source) {
  var newObj = {};

  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
