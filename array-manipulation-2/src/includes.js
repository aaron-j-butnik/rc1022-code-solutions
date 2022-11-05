/* exported includes */

/* Pseudo Code

1. Function definition named includes with two parameters, (array, value);
2. The some method of the array object is being called with one argument, an anonymous function with one parameter (checkTruthyOrFalsey).
3. The parameter checkTruthyOrFalsey is set strickly equal to parameter value, which is being returned by the anonymous function, which is then being returned by the some method of the array object.
*/

function includes(array, value) {
  return array.some(function (checkTruthyOrFalsey) {
    return checkTruthyOrFalsey === value;
  });
}
