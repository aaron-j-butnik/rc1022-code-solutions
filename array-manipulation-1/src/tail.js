/* exported tail */

/* Pseudo Code:
  Goal: Return a new aray containing all elements of array after the first.

  1. Function definition named tail with one paramter.
  2. Asign an empty array literal to variable newArray.
  3. Use a 'for-loop' to iterate over the array.
  4. Assign 1 to initialization of the 'for-loop'.
  5. Condition of 'for-loop': i is less than length of the parameter object.
  6. Increment final expression of 'for-loop' by 1 after each iteration.
  7. Push array values into empty array literal variable using the push method of the variable object with one argument, parameter at i.
  8. Return the variable holding the new array literal.
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
