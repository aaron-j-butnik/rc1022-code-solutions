/* exported intersection */

/*
1. Assigne empty array literal to var newArr.
2. For loop, zero assigned to var i, i less than length property of the first object, i++
3. If statement, indexOf method of the second object called with argument first object at i, not equal to negative 1.
  Push method of the newArr object called with argument first object at i.
4. Return newArr.

*/

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
