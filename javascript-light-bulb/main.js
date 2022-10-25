/* Pseudo Code:

1. Assign the querySelector method of the document object that calls one argument, string '.light-bulb', to variable $lightBulb.
2. Assign the querySelector method of the document object that calls one argument, string '.bg-on'), to variable $backGround.
3. Use addEventListener method of the $lightBulb object, that calls two arguments, string 'click', and variable handleSwitchOffOn.
4. Callback function definition named handleSwitchOffOn with one parameter, event object.
5. Use the toggle method of the classList object of the $lightBulb object that calls one argument, string 'light-bulb'.
6. Use the toggle method of the classList object of the $lightBulb object that calls one argument, string 'bg-on'.
*/

var $lightBulb = document.querySelector('.light-bulb');
var $backGround = document.querySelector('.bg-on');

$lightBulb.addEventListener('click', handleSwitchOffOn);

function handleSwitchOffOn(event) {
  $lightBulb.classList.toggle('light-bulb');
  $backGround.classList.toggle('bg-on');
}
