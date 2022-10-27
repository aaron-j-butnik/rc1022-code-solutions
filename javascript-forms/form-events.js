function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ': ' + event.target.value);
}

var $userName = document.querySelector("input[name='name']");
var $userEmail = document.querySelector("input[name='email']");
var $userMessage = document.querySelector("textarea[name='message']");

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
