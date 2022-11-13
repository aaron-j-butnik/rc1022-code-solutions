/* exported isPalindromic */

/* Pseudo Code:
1. Define function named isPalindromic with one parameter (string);
2. Assign the replace method of the string object being called with two arguments string space, and empty string, to the variable string.
3. for loop - Zero assigned to variable i.
            - i is less than the length property of the string.
            - i is incremented by one each iteration.
4. if statement: condition - string object at index i is strickley not equal to string object at length property of string object minus var i minus one.
  -return false;
5. Return true.

*/

function isPalindromic(string) {
  string = string.replace(' ', '');

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}
