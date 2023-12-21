import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хэштеги';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.body.addEventListener('keydown', onDocumentKeydown);
  resetScale();
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.body.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const existMessageElement = () =>
  document.querySelector('.error');

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused() && !existMessageElement()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

const blockButton = () => {
  const blockBtn = document.getElementById('upload-submit');
  blockBtn.textContent = 'Загружаем...';
  blockBtn.disable = true;
  blockBtn.setAttribute('disabled', 'true');
};

const unblockButton = () => {
  const blockBtn = document.getElementById('upload-submit');
  blockBtn.textContent = 'Опубликовать';
  blockBtn.disable = false;
  blockBtn.removeAttribute('disabled');
};

const onFormSubmit = async(evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);

    try {
      blockButton();
      await sendData(formData);
      unblockButton();
      hideModal();
      showSuccessMessage();
    } catch (error){
      showErrorMessage();
      unblockButton();
    }
  }
};

const setupForm = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
  overlay.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  pristine.addValidator(
    hashtagField,
    validateTags,
    TAG_ERROR_TEXT
  );
};

export { setupForm };

