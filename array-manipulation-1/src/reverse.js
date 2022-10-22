/* exported reverse */

/* Pseudo Code

1. Function definition named reverse with one parameter, (array).
2. Assign an empty array literal to variable newArray.
3. 'for-loop': Length of array minus one assigned to variable i; variable i is greater than or equal to 0; decrement i after each iteration.
4. Push new array elements into variable newArray.
5. Return newArray.
*/

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
