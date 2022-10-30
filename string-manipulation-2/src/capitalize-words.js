/* exported capitalizeWords */

/* Pseudo Code

1. Function definition named capitalizeWords with one paramater, (words).
2. Assign the split method of the words object with one argument, string space (' '), to the variable wordsArr.
3. Assign and empty array iteral to variable wordsCapArr.
4. 'for-loop' - Initialization: variable i is equal to 0.
5. 'for-loop' - Condition: variable i is less than the length property of the wordsArr object.
6. 'for-loop' - Final expression: variable i incremented by one after each iteration.
7. The push method of the wordsCappArr object is being called with one argument: The toUpperCase() method of the wordsArr object at index i, at index 0 is being called with no arugments, concatenated with the toLowerCase() method of the slice medthod being called with one argument, number 1, of the wordsArr object at index i.
8. Return the join method of the wordsCapArr object is being called with one argument, string space (' ').
*/

function capitalizeWords(words) {
  var wordsArr = words.split(' ');
  var wordsCapArr = [];
  for (var i = 0; i < wordsArr.length; i++) {
    wordsCapArr.push(wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1).toLowerCase());
  }
  return (wordsCapArr.join(' '));
}
