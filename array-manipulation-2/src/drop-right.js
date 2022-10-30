/* exported dropRight */

/* Pseudo Code

1. Function definition named dropRight with two parameters, (array, count);
2.

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
