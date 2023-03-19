const modalButtons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__form-button');
const modalCloseArea = document.querySelector('.modal__for-close');

const onModalButtonClick = (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
};

modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('is-open');
});


modalCloseArea.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
