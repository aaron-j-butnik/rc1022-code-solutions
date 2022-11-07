/* exported pick */

/* Pseudo Code:

1. Define function named pick with two parameters (source, keys).
2. Assing empty object literal to variable newObject.
3. 'for-loop' - Initializtion: zero assigned to variable i.
              - Condition: var i is less than length property of keys object.
              - Final Epression: var i is incremented by one after each iteration.
4. 'if' statement:
              - Source object at keys object at var i, is strickly not equal to undefined.
5. Source object at keys object at var i is assigned to newObj object at keys object at var i.
6. Return newObj variable.

*/

function pick(source, keys) {
  var newObj = {};

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
