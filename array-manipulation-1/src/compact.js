/* exported compact */

/* Pseudo Code:

1. Define a function named compact with one parameter, array.
2. Assign an empty array literal to variable newArray.
3. 'for-loop': Assign zero to variable i; variable i is less than length of parameter array; increment variable i by one after each iteration.
4. Conditional 'if' statement with condition parameter array at variable i.
5. Use push method of newArray variable with one argument, parameter array at variable i.
6. Return newArray variable.
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
