/* exported take */

/* Pseudo Code

1. Function definition named take with two parameters, (array, count).
2. Assign an empty array literal to variable newArr.
3. 'for-loop' - Initionalization: zero is assigned to variable i.
              - Condition: var i < parameter count.
              - Final Expression: var i incremented by one after each iteration.
4.'if' statement:
                  - Condition: parameter array at index var i is truthy, or
                    parameter array at index var i is strickly equal to boolean false.
5. Push method of the newArr object is being called with one argument, arrary at index var i.
6. Return variable newArr.
*/

function take(array, count) {
  var newArr = [];

  for (var i = 0; i < count; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
