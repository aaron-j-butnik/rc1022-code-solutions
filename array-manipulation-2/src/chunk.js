/* exported chunk */

/* Pseudo Code:

1. Function definition named chunk with two parameters, (array, size).
2. Assign an empty array literal to variable newArr.
3. 'for-loop' - Initionalization: zero is assigned to variable i.
              - Condition: var i < length property of the array object.
              - Final Expression: var i incremented by variable i plus parameter size after each iteration.
4. Push method of the newArr object is being called with one argument, which is the slice method of the array object being called with two arguments, var i and var i plus parameter size.
5. Return variable newArr.

*/

function chunk(array, size) {
  var newArr = [];

  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}
