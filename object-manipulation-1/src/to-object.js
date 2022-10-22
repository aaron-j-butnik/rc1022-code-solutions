/* exported toObject */

/* Pseudo Code
1. Define function named toObject with one parameter, (keyValuePair);
2. Assign empty object literal to variable newObject;
3. Assign variable keyValuePair at index 1 to variable newObject at variable keyValuePair at index 0.
4. Return variable newObject.
*/

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
