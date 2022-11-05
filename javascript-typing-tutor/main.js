
var $letters = document.querySelectorAll('span');
var letterIndex = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if ($letters[letterIndex].textContent === event.key) {
    $letters[letterIndex].classList.add('correct');
    $letters[letterIndex].classList.remove('incorrect');
    $letters[letterIndex + 1].classList.add('on-letter');
    letterIndex++;
    $letters[letterIndex - 1].classList.remove('on-letter');
  } else {
    $letters[letterIndex].classList.add('incorrect');
    $letters[letterIndex].classList.remove('on-letter');

  }
}
