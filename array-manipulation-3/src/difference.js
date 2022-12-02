/* exported difference */

/*
1. Empty array literal assigned to var newArr.
2. Define function named compareArrs(arrOne, arrTwo).
3. For loop, zero assigned to var i, i less than length property of arrOne object, i++;
4. If statment, indexOf method of the arrTwo object called with arrOne object at i === negative one.
  Push method of newArr object called with arrOne at i.
5. Call compareArrs function with arguments first, and second;
6. Call compareArrs function with arguments second and first;
7. Return newArr;

*/

function difference(first, second) {
  var newArr = [];

  function compareArrs(arrOne, arrTwo) {
    for (var i = 0; i < arrOne.length; i++) {
      if (arrTwo.indexOf(arrOne[i]) === -1) {
        newArr.push(arrOne[i]);
      }
    }
  }
  compareArrs(first, second);
  compareArrs(second, first);
  return newArr;
}
