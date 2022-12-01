/* exported reverseWords */

/*
1. Split method of the string object assigned to var words.
2. For loop, zero assinged to var i, length property of the words object, i++.
3. Split method of words object at i, reverse method of words at i, join method of words at i, assigned to words at i.
4. Return join method of words object.

*/

function reverseWords(string) {

  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}
