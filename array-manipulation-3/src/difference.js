/* exported difference */

function difference(first, second) {
  var newArr = [];

  function compareArrs(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }
  }
  compareArrs(first, second);
  compareArrs(second, first);
  return newArr;
}

// function difference(first, second) {
//   var newArr = [];
//   newArr.push(first.filter(element => second.indexOf(element) === -1));
//   newArr.push(second.filter(element => first.indexOf(element) === -1));
//   return newArr;
// }
