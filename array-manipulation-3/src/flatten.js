/* exported flatten */

// function flatten(array) {
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//       newArr.push(array[i][j]);
//     }
//   }
//   console.log(newArr);
//   return newArr;
// }

// function flatten(array) {
//   var result = [];

//   if (!Array.isArray(array)) {
//     return array;
//   }

//   for (var data of array) {
//     result = result.concat(flatten(data));
//   }
//   console.log(result);
//   return result;
// }

function flatten(array) {
  var result = [];
  return result.concat(...array);
}
