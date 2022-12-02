/* exported zip */

/*
1.Return Array.from method called with two arguments:
  Array object called with one argument, min proptery of the Math object, being called with two arguments, length property of the second object, and length property of the first object.
  Anonymous function with two parameters firstElem, and i.
  Return to anonymous funcition aray of first object at i, second object at i.
*/

function zip(first, second) {
  return Array.from(Array(Math.min(second.length, first.length)), function (firstElem, i) { return [first[i], second[i]]; });
}
