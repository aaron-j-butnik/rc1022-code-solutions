
// To do: when right chev is clicked, change img to right img.

var $rightChev = document.querySelector('.fa-chevron-right');
var $leftChev = document.querySelector('.fa-chevron-left');
var $imageChange = document.querySelector('img');

// var $btns = document.querySelectorAll('.fa-circle');
var imageUrls = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

// var btnIndex = 0;
var imageIndex = 0;

$rightChev.addEventListener('click', handleRightChev);
$leftChev.addEventListener('click', handleLeftChev);

function handleRightChev(event) {
  // btnIndex++;
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
    // btnIndex = 0;
  }
  $imageChange.setAttribute('src', imageUrls[imageIndex]);

}

function handleLeftChev(event) {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 4;
  }
  $imageChange.setAttribute('src', imageUrls[imageIndex]);
}

// var imageCount = 0;
setInterval(changeImage, 3000);

function changeImage() {
  imageIndex++;
  $imageChange.setAttribute('src', imageUrls[imageIndex]);
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }

}
