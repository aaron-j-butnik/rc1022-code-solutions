/* exported numVowels */

/* Pseudo Code

1. Function definition named numVowels with one argument, (string).
2. Assing empty string to variable vowels.
3. 'for-loop' - Initialization: var i is equal to zero.
4. 'for-loop' - Condition: var i is less than length property of the string object.;
5. 'for-loop' - Final Expression: var i is incremented by one after each iteration.
6. 'If' statement condition:
    - toLowerCase() method of the string object at index var i is strickly equal to string a or,
    - toLowerCase() method of the string object at index var i is strickly equal to string e or,
    - toLowerCase() method of the string object at index var i is strickly equal to string i or,
    - toLowerCase() method of the string object at index var i is strickly equal to string o or,
    - toLowerCase() method of the string object at index var i is strickly equal to string u.
7. Variable vowels is being concatenated with string object at index var i, and the result of the expression is being assigned to variable vowles.
8. Return the length property of the variable vowels.
*/

function numVowels(string) {
  var vowels = '';
  for (var i = 0; i < string.length; i++) {
    if (
      string[i].toLowerCase() === 'a' ||
      string[i].toLowerCase() === 'e' ||
      string[i].toLowerCase() === 'i' ||
      string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'u') {
      vowels += string[i];
    }
  }
  return vowels.length;
}
