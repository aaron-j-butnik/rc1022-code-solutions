/* exported isPalindromic */

/* Pseudo Code:
1. Replace method of the string object assigned to parameter string.
2. for loop, assign zero to var i, i < length method of string object, i++.
3. if statement, string at i, not equal to string at length of string objecct minus i minus 1.
4. if true, return false.
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
