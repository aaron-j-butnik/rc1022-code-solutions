/* exported unique */

function unique(array) {
  return array.filter(function (currentValue, index, arr) {
    return arr.indexOf(currentValue) === index;
  });
}
