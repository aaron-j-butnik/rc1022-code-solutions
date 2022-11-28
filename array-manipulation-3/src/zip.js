/* exported zip */

function zip(first, second) {

  // var zip = first.map(function (firstElem, i) {
  //   return [firstElem, second[i]];
  // });
  // console.log(zip);
  // return zip;
  return Array.from(Array(Math.min(second.length, first.length)), function (firstElem, i) { return [first[i], second[i]]; });
}
