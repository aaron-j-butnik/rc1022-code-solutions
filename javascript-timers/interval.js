
var count = 4;
var $countdown = document.querySelector('.countdown-display');
var intervalId = setInterval(startCountdown, 1000);

function startCountdown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeelooww Us~';
    clearInterval(intervalId);
  }
}
