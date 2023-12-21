const FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png'];

const fileField = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');
const smallPictures = document.querySelectorAll('.effects__preview');

const renderSmallPictures = (fileUrl) => {
  if (smallPictures.length) {
    smallPictures.forEach((smallPicture) => {
      smallPicture.style = `background-image: url(${fileUrl})`;
    });
  }
};

fileField.addEventListener('change', () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const fileUrl = URL.createObjectURL(file);
    preview.src = fileUrl;
    renderSmallPictures(fileUrl);
  }
});
