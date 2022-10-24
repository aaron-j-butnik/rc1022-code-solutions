/* exported initial */

/* Pseudo Code
  Goal: Return a new array containing all elements of array except the last.

  1. Function definition named initial with one parameter, array.
  2. Declare a variable and assign an empty array literal.
  3. Use a 'for-loop' to iterate over the array.
  4. 'for-loop' Initialization: Assign zero to variable i.
  5. 'for-loop' Condition: variable i is less than the length property of the parameter object minus 1.
  6. 'for-loop' Final Expression: Increment variable i by one after each iteration.
  7. Push parameter element into empty array literal variable using the push method of the variable object, with one argument, parameter at i.
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
