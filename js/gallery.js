import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onPictureClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if(!thumbnail) {
    return;
  }
  evt.preventDefault();

  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId);
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  container.addEventListener('click', onPictureClick);

  renderThumbnails(pictures, container);
};

export { renderGallery };
