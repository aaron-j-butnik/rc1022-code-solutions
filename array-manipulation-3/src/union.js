/* exported union */

function union(first, second) {
  var arr = [...first, ...second];
  return [...new Set(arr)];
}
