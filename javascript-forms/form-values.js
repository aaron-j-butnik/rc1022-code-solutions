var $submitForm = document.querySelector('#contact-form');

$submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var formData = {};
  formData.name = $submitForm.elements.name.value;
  formData.email = $submitForm.elements.email.value;
  formData.message = $submitForm.elements.message.value;

  console.log('formData:', formData);
  $submitForm.reset();
}
