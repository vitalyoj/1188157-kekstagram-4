// Временные данные (замените их на ваши собственные данные)
const data = [
  {
    url: 'https://example.com/image1.jpg',
    description: 'Красивая фотография 1',
    likes: 10,
    comments: 5
  },
  {
    url: 'https://example.com/image2.jpg',
    description: 'Забавный снимок 2',
    likes: 15,
    comments: 8
  }
];

// Создаем DocumentFragment для оптимизации вставки
const fragment = document.createDocumentFragment();

// Шаблон #picture
const pictureTemplate = document.createElement('div');
pictureTemplate.classList.add('picture');
pictureTemplate.innerHTML = `
            <img class="picture__img" src="" alt="">
            <div class="picture__likes"></div>
            <div class="picture__comments"></div>
        `;

// Заполняем шаблон данными и добавляем в DocumentFragment
data.forEach((item) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = item.url;
  picture.querySelector('.picture__img').alt = item.description;
  picture.querySelector('.picture__likes').textContent = `Likes: ${item.likes}`;
  picture.querySelector('.picture__comments').textContent = `Comments: ${item.comments}`;
  fragment.appendChild(picture);
});

// Вставляем сгенерированные DOM-элементы в блок .pictures
const picturesContainer = document.querySelector('.pictures');
picturesContainer.appendChild(fragment);
