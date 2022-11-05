/* exported takeRight */

/* Pseudo Code

1. Function definition named take with two parameters, (array, count).
2. Assign an empty array literal to variable newArr.
3. 'for-loop' - Initionalization: length property of the array object minus count is assigned to variable i.
- Condition: var i < length property of the array object.
              - Final Expression: var i incremented by one after each iteration.
4.'if' statement:
- Condition: parameter array at index var i is truthy, or
                    parameter array at index var i is strickly equal to boolean false.
5. Push method of the newArr object is being called with one argument, arrary at index var i.
6.'else' statement: Return slice method of the array object being called with two arguments, number 0 and parameter count.
7. Return variable newArr.
*/

function takeRight(array, count) {
  var newArr = [];

  for (var i = array.length - count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    } else {
      return array.slice(0, count);
    }
  }
  return newArr;
}
