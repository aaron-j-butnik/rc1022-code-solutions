/* exported lastChars */

/* Pseudo Code

1. Function definition named firstChars with two parameters, (length, string).
2. Assign empty string to variable chars.
3. 'if' statement condition:
              - string is strickly equal to empty string ('') or,
              - the length property of the string object is less than the parameter length.
4. Return string.
5. 'Else' statement:
        - 'for-loop' - Initialization: var i is equal to the length property of the string
                object minus the parameter length.
              - Condition: var i is less than or equal to the length property of the string
                object.
              - Final Expression: var i is incremented by one after each iteration.
        - variable chars is concatenated with parameter string at index var i, and the result of the expression is assigned to variable chars.
6. Return variable chars.
*/

function lastChars(length, string) {
  var chars = '';
  if (string === '' || string.length < length) {
    return string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      chars += string[i];
    }
  }
  return (chars);
}
