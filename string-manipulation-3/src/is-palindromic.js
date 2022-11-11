/* exported isPalindromic */

function isPalindromic(string) {
  // TODO:
  // if the first is equal to the last
  // if the second is equal to the second-to-last
  // ...

  // i: 2
  //   v v
  // racecar
  //   v  v
  // taco cat

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}
