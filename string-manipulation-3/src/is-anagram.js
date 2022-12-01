/* exported isAnagram */

/*
1. ReplaceAll method of firstString object assigned to var firstStrNoSpace
2. ReplaceAll method of secondString object assigned to var secondStrNoSpace
3. Split method of the firstStrNoSpace, sort method of object, join method of object, assigned to var sortedFirstString.
4. SPlit method of the secondStrNoSpace, sort method of object, join method of object, assigned to var sortedSecondString.
5. If statement, condition sortedFirstString var === sortedSecondString var.
6. If true, return true.
7. Return false.
*/

function isAnagram(firstString, secondString) {
  var firstStrNoSpace = firstString.replaceAll(' ', '');
  var secondStrNoSpace = secondString.replaceAll(' ', '');

  var sortedFirstString = firstStrNoSpace.split('').sort().join('');
  var sortedSecondString = secondStrNoSpace.split('').sort().join('');

  if (sortedFirstString === sortedSecondString) {
    return true;
  }
  return false;
}
