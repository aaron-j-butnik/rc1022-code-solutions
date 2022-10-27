var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('  event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('  closest .task-list-item:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
