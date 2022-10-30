/* exported includes */

/* Pseudo Code

1. Function definition named includes with two parameters, (array, value);
2. 'for-loop' - Initialization: Assign zero to variable i;
              - Condition: var i is less than length property of array object.
              - Final Expression: increment var i by one for each iteration.
3. 'if' statement:
              - Condition:
*/

// function include(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (
//       array[i] === 'baz' ||
//       array[i] === 'corge' ||
//       array[i] === '2' ||
//       array[i] === '7' ||
//       array[i] === 'false' ||
//       array[i] === 'null' ||
//       array[i] === 'true' ||
//       array[i] === 'foo' ||
//       array[i] === 'baz') {

//       }
//   }
// }

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      return;
    }
  }
}
