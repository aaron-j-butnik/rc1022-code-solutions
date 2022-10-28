/* exported capitalizeWord */

/* Pseudo Code

1. Function definition named capitalizeWord with one parameter, (word);
1. 'If' condition toLowerCaseMethod of object word being called with no arguments is strickly equal to string javascript.
2. Then return toUpperCase() method of object word at index 0 being called with no arguments, concatenated with, toLowerCase() method of slice() method of object word being called with two arguments (number 1, and number 4), concatenated with, toUpperCase method() of object word at index 4, concatenated with to lowerCase() method of slice method of the object word being called with one argument, number 5.
3. 'Else' return toUpperCase() method of object word at index 0, concatenated with toLowerCase() method of slice method of obejct word being called with one argument, number 1.

*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word[4].toUpperCase() + word.slice(5).toLowerCase();
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
