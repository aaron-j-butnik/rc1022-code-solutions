/* exported getValues */

/* Pseudo Code

1. Define function named getValues with one parameter (object);
2. Assign an empty array literal to variable objPropValues;
3. Use 'for...in' loop with variable prop in variable object;
4. Push variable object at variable prop to variable objPropValues.
5. Return variable objPropValues.
*/

function getValues(object) {
  var objPropValues = [];
  for (var prop in object) {
    objPropValues.push(object[prop]);
  }
  return objPropValues;
}
