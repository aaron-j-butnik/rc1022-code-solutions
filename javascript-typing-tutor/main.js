
var $letters = document.querySelectorAll('span');
var letterIndex = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if ($letters[letterIndex].textContent === event.key) {
    $letters[letterIndex].classList.add('correct');
    $letters[letterIndex].classList.add('gd-line');
    $letters[letterIndex].classList.remove('incorrect');
    letterIndex++;
  } else {
    $letters[letterIndex].classList.add('incorrect');
    $letters[letterIndex].classList.add('bd-line');
  }
}
