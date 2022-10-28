/* exported truncate */

/* Pseudo Code

1. Function definition named truncate with 2 parameters, (length, string).
2.Return the slice method of the string object being called with two arguments, 0 and parameter length, and concatenated with string '...' .

*/

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
