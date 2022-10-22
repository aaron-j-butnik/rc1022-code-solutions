/* exported tail */

/* Pseudo Code:
  Goal: Return a new aray containing all elements of array after the first.

  1. Decare a variable and assign it to an empty array literal.
  2. Use a 'for-loop' to iterate over the array.
  3. Assign 1 to initialization of the 'for-loop'.
  4. Condition of 'for-loop': i is less than length of the parameter object.
  5. Increment final expression of 'for-loop' by 1 after each iteration.
  6. Push array values into empty array literal variable using the push method of the variable object with one argument, parameter at i.
  7. Return the variable holding the new array literal.
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
