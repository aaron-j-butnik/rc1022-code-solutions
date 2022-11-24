/* exported titleCase */

function titleCase(title) {
  // console.log('title: ', title);
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var words = title.split(' ');
  // console.log('words: ', words);
  for (var i = 0; i < words.length; i++) {
    var isStartOfSubtitle = false;

    // TODO: Set isStartOfSubtitle to true if the previous word ended with a ":" (use .endsWith())

    if (!minorWords.includes(words[i].toLowerCase()) || isStartOfSubtitle) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    } else {
      words[i] = words[i].toLowerCase();
    }
    if (words[i] === 'Javascript') {
      words[i] = 'JavaScript';
    }
    if (words[i] === 'Api') {
      words[i] = 'API';
    }
  }
  return words.join(' ');
}
