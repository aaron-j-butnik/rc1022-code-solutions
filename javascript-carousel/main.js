
// To do: when right chev is clicked, change img to right img.

var $rightChev = document.querySelector('.fa-chevron-right');
var $leftChev = document.querySelector('.fa-chevron-left');
var $imageChange = document.querySelector('img');
var $btnMain = document.querySelector('.btn');
var $btns = document.querySelectorAll('.fa-circle');
var imageUrls = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var imageIndex = 0;

$rightChev.addEventListener('click', handleRightChev);
$leftChev.addEventListener('click', handleLeftChev);
$btnMain.addEventListener('click', handleBtn);

function handleRightChev(event) {
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }
  $imageChange.setAttribute('src', imageUrls[imageIndex]);
  for (var i = 0; i < $btns.length; i++) {
    $btns[i].classList.remove('bg-circle');
  }
  $btns[imageIndex].classList.add('bg-circle');
}

function handleLeftChev(event) {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 4;
  }
  $imageChange.setAttribute('src', imageUrls[imageIndex]);
  for (var i = 0; i < $btns.length; i++) {
    $btns[i].classList.remove('bg-circle');
  }
  $btns[imageIndex].classList.add('bg-circle');
}

setInterval(changeImage, 3000);

function changeImage() {
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }
  $imageChange.setAttribute('src', imageUrls[imageIndex]);
  for (var i = 0; i < $btns.length; i++) {
    $btns[i].classList.remove('bg-circle');
  }
  $btns[imageIndex].classList.add('bg-circle');
}

function handleBtn(event) {
  if (event.target.matches('i')) {
    imageIndex = Number(event.target.getAttribute('data-index'));
    $imageChange.setAttribute('src', imageUrls[imageIndex]);
    for (var i = 0; i < $btns.length; i++) {
      $btns[i].classList.remove('bg-circle');
    }
    $btns[imageIndex].classList.add('bg-circle');
  }
}
