// Вспомогательная функция для получения случайного числа в диапазоне [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Вспомогательная функция для генерации случайного комментария
function getRandomComment(id) {
  const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const NAMES = ['Артём', 'Виктор', 'Ирина', 'Елена', 'Павел', 'София', 'Анна', 'Дмитрий'];

  const message = MESSAGES[getRandomInt(0, MESSAGES.length - 1)];

  return {
    id: id,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: message,
    name: NAMES[getRandomInt(0, NAMES.length - 1)]
  };
}

// Основная функция для генерации массива объектов
function generatePhotos(count = 25) {
  const photos = [];
  let commentId = 1;

  for (let i = 1; i <= count; i++) {
    const comments = [];
    const commentsCount = getRandomInt(0, 30);

    for (let j = 0; j < commentsCount; j++) {
      comments.push(getRandomComment(commentId++));
    }

    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: getRandomInt(15, 200),
      comments: comments
    };

    photos.push(photo);
  }

  return photos;
}

generatePhotos();
