var $openModal = document.querySelector('.btn-open-modal');
var $surveyModal = document.querySelector('.modal-container');
var $overlay = document.querySelector('.overlay');

$openModal.addEventListener('click', handleOpenModal);
$surveyModal.addEventListener('click', handleCloseModal);

function handleOpenModal(event) {
  $surveyModal.classList.toggle('hidden');
  $overlay.classList.toggle('hidden');
  $openModal.classList.add('place-bg');
}

function handleCloseModal(event) {
  $surveyModal.classList.toggle('hidden');
  $overlay.classList.toggle('hidden');
  $openModal.classList.remove('place-bg');
}
