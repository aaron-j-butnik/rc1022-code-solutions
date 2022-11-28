/* exported equal */

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
