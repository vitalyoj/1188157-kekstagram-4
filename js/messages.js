const successMessageElement = document
  .querySelector('#success')
  .content.querySelector('.success');

const hideSuccessMessage = () => {
  successMessageElement.remove();
};

const successButton = successMessageElement.querySelector('.success__button');

const errorMessageElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideErrorMessage = () => {
  errorMessageElement.remove();
};

const errorButton = errorMessageElement.querySelector('.error__button');

const onSuccessClickOutside = (evt) => {
  const successMessageInner = successMessageElement.querySelector('.success__inner');
  if (!successMessageInner.contains(evt.target)) {
    hideSuccessMessage();
    document.removeEventListener('click', onSuccessClickOutside);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const onErrorClickOutside = (evt) => {
  const errorMessageInner = errorMessageElement.querySelector('.error__inner');
  if (!errorMessageInner.contains(evt.target)) {
    hideErrorMessage();
    document.removeEventListener('click', onErrorClickOutside);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const onSuccessButtonClick = () => {
  hideSuccessMessage();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onSuccessClickOutside);
};

const onErrorButtonClick = () => {
  hideErrorMessage();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onErrorClickOutside);
};

const showSuccessMessage = () => {
  document.querySelector('body').append(successMessageElement);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onSuccessClickOutside);
};

const showErrorMessage = () => {
  document.querySelector('body').append(errorMessageElement);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onErrorClickOutside);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
    hideSuccessMessage();
    hideErrorMessage();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onSuccessClickOutside);
    document.removeEventListener('click', onErrorClickOutside);
  }
}

export { showSuccessMessage, showErrorMessage };
