const modalButtons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__form-button');

const onModalButtonClick = (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
};

const onModalCloseButtonClick = (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
};

const onModalClick = (evt) => {
  if (!evt.target.closest('.modal__wrapper')) {
    modal.classList.remove('is-open');
  }
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
};

modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));
modalCloseButton.addEventListener('click', onModalCloseButtonClick);
modal.addEventListener('click', onModalClick);
document.addEventListener('keydown', onDocumentKeydown);
