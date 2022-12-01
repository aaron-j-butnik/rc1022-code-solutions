/* exported equal */

/*
1. if statment, length property of the first object, not equal to length property of the second object.
  return false.
2. Else if statement, first object at zero not equal to second object at zero.
  return false.
3. Return every method of the first object being called with anonymous function with parameter value, return includes method of the second object called with argument value.

*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else if (first[0] !== second[0]) {
    return false;
  }
  return first.every(function (value) {
    return second.includes(value);
  });
}
