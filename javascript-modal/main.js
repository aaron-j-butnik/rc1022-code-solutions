var $openModal = document.querySelector('.btn-open-modal');
var $surveyModal = document.querySelector('.modal-container');

$openModal.addEventListener('click', handleOpenModal);

function handleOpenModal(event) {
  $surveyModal.classList.toggle('hidden');
}
