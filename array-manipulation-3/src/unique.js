/* exported unique */

/*
1. Return filter method of array object being called with argument, anonymous function with parameters, currentValue, index, and arr. Return to anonymous function indexOf method of the arr object called with argument currentValue === index variable.
*/

function unique(array) {
  return array.filter(function (currentValue, index, arr) {
    return arr.indexOf(currentValue) === index;
  });
}
