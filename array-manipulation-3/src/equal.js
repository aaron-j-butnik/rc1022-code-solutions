/* exported equal */

/*
1. If statment, length property of the first object, not equal to length property of the second object.
  return false.
2. For loop, zero assigned to var i, i less than length property of the first object, i++;
  if statement, condition: first object at index i is strictly not equal to second object at index i.
    return false;
3. Return true.

*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
