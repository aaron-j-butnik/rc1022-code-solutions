/* exported omit */

/* Pseudo Code:

1. Define function named omit, with 2 parameters, (source, keys).
2. Assign empty object literal to variable newObj.
3. 'for...in' loop - Variable prop in source object.
4. 'if' statement, within 'for...in' loop.
        - Condition: indexOf method of the keys object is being called with one argument, variable prop, and is strickly equal to negative one.
5. If true: Assign source object at variable prop to newObj object at variable prop.
6. Return newObj object.

*/

function omit(source, keys) {
  var newObj = {};

  for (var prop in source) {
    if (keys.indexOf(prop) === -1) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
