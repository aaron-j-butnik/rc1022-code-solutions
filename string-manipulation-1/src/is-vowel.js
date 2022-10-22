/* exported isVowel */

/* Pseudo Code
  Goal: A Boolean indicating whether or not char is a vowel. isVowel should handle both uppercase and lowercase characters.

  1. Make conditional 'if' statement.
  2. In condition, check to see if parameter is strickly equal to uppercase vowels, or lowercase vowels.
  3. If condition is met, return true.
  4. If condition is not met, return false.
*/

function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
