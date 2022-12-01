/* exported titleCase */

/*
1. Array of all minor words assinged to var minor words.
2. Split method of the title object assigned to  var words.
3. For loop, zero assigned to var i, i < length property of the words object, i++;
4. If statement, includes method of logical not minorWOrds objecct called with toLowerCase method of words object at i.
  logical or, i less than zero, logical and, endsWith method of the words object at i - 1.
5. toUpperCase method of the words object at i at zero, concatenated with toLowerCase method of the slice method of the words object at i, assigned to words object at i.
6. toLowerCase method of the words object at i.
7. if statement, words object at i === to string 'Api'.
  'API' assigned to words[i].
8. If statement, i === 0.
  toUpperCase method of words object at i at zero, concatenated with toLowerCase method of slice method of words at i, assigned to words[i]
9. If statement, includes method of words object at i.
  Split method of words object at i assigned to var split.
  toUpperCase method of split object at length method of the split object minus 1, at zero, concatenated with toLowerCase method of slice method of split object at one, assigned to words at i.
  split object at zero, concatenated with string hyphen concatenated with splitWord varaible, assigned to words object at i.
10. join method of words object assgned to result.
11. Replace all method of the result object called with 'Javascript', and 'JavaScript'. Assgined to var result.
12. Return result.

*/

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var words = title.split(' ');

  for (var i = 0; i < words.length; i++) {

    if (!minorWords.includes(words[i].toLowerCase()) || (i > 0 && words[i - 1].endsWith(':'))) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    } else {
      words[i] = words[i].toLowerCase();
    }
    if (words[i] === 'Api') {
      words[i] = 'API';
    }
    if (i === 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    if (words[i].includes('-')) {
      var split = words[i].split('-');
      var splitWord = split[split.length - 1][0].toUpperCase() + split[1].slice(1).toLowerCase();
      words[i] = split[0] + '-' + splitWord;
    }
  }
  var result = words.join(' ');
  result = result.replaceAll('Javascript', 'JavaScript');

  return result;
}
