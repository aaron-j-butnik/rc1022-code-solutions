/* exported dropRight */

/* Pseudo Code

1. Function definition named dropRight with two parameters, (array, count);
2. Assign empty array literal to variable newArr.
3. 'for-loop' - Initialization: zero assigned to var i.
              - Condition: var i less than length property of the array object minus parameter count.
              - Final Expression: var i incremented by one after each iteration.
4. 'if' statment:
              - Condition: parameter array at index i.
5. Push method of newArr object being called with one argument, parameter array at index var i.
6.  'else': Return slice method of the array object being called with two arguments, number 0 and number 1.
7. Return variable newArr.

*/

function dropRight(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    } else {
      return array.slice(0, 1);
    }
  }
  return newArr;
}
