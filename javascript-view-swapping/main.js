var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < Array.from($tabElements).length; i++) {
      if (event.target === Array.from($tabElements)[i]) {
        Array.from($tabElements)[i].classList.add('active');
      } else {
        Array.from($tabElements)[i].classList.remove('active');
      }
    }
  }
  if (event.target.matches('.tab')) {
    var $dataViewValue = event.target.getAttribute('data-view');

    for (var j = 0; j < Array.from($viewElements).length; j++) {
      if ($dataViewValue !== Array.from($viewElements[j].getAttribute('data-view'))) {
        Array.from($viewElements)[j].className = ('view hidden');
      } else {
        Array.from($viewElements)[j].className = ('hidden');
      }
    }
  }
}
// console.log(event.target);
// console.log($viewElements);
// console.log($tabElements);
// console.log($elementName);
// console.log(Array.from($tabElements)[1]);
