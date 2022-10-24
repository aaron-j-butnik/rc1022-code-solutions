function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.currentTarget);
}

var $buttonClicked = document.querySelector('.click-button');
$buttonClicked.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.hover-button'));
}

var $buttonHovered = document.querySelector('.hover-button');
$buttonHovered.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.double-click-button'));
}

var $buttonDoubleClicked = document.querySelector('.double-click-button');
$buttonDoubleClicked.addEventListener('dblclick', handleDoubleClick);
