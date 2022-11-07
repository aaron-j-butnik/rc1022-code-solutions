/* exported defaults */

/* Pseudo Code:

1. Define function named defaults with two parameters (target, source).
2. 'for...in' loop - Variable props in source object.
3. 'if' statment: - Condition: target object at variable props is strickly equal to undefined.
4. Source object at variable props is assigned to target object at variable props.

*/

function defaults(target, source) {
  for (var props in source) {
    if (target[props] === undefined) {
      target[props] = source[props];
    }
  }
}
