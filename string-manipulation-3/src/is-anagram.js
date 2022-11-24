/* exported isAnagram */

/*
1. loop over firstString.
2. loop over secondString.
3. check to see if firstString[i] is not equal to secondString [j].
4. if true, return false.
5. else return true.
*/

// function isAnagram(firstString, secondString) {
//   for (var i = 0; i < firstString.length; i++) {
//     for (var j = 0; j < secondString.length; j++) {
//       if (firstString[i] !== secondString[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function isAnagram(firstString, secondString) {
  var firstStrNoSpace = firstString.replaceAll(' ', '');
  var secondStrNoSpace = secondString.replaceAll(' ', '');

  var sortedFirstString = firstStrNoSpace.split('').sort().join('');
  var sortedSecondString = secondStrNoSpace.split('').sort().join('');

  if (sortedFirstString === sortedSecondString) {
    return true;
  }
  return false;

  // if (firstStrNoSpace.length !== secondStrNoSpace.length) {
  //   return false;
  // }
  // for (var i = 0; i < firstStrNoSpace.length; i++) {
  //   if (!secondStrNoSpace.includes(firstStrNoSpace[i])) {
  //     return false;
  //   }
  // }
  // for (var j = 0; j < secondStrNoSpace.length; j++) {
  //   if (!firstStrNoSpace.includes(secondStrNoSpace[j])) {
  //     return false;
  //   }
  // }
  // return true;
}

// var result = isAnagram('abcc', 'abca');

// console.log('result: ', result);
