/* exported reverseWords */

function reverseWords(string) {
  // ["hello", "world"]
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}

// var result = reverseWords('hello world');
// result: "world hello"
