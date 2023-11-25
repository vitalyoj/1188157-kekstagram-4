import {getRandomInt, getRandomArrayElement, createIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Первый раз - в первый класс! #school #memories',
  'Осень, осень, ну давай у листьев спросим...',
  'Рецепт шарлотки - 4 яйца, 1 стакан муки, 1 стакан сахара и 4 яблока. Все смешать и в духовку на 40 минут.',
  'Однажды на даче #камин #отдых #уют',
  'В нашей семье пополнение - новый друг - пушистик Лакки #goldenretriever',
  'Дети - цветы жизни #любовь #семья #счастье',
  'Наши веселые будни #прогулка #радость #мокрыелапы'
];

const NAMES = [
  'Никита',
  'Арина',
  'Артемий',
  'Ольга',
  'Виктор',
  'Елизавета',
  'Даниил',
  'Анастасия',
  'Роман',
  'Мия',
  'Евгений',
  'Наталья',
  'Ярослав',
  'Надежда',
  'Александр',
  'Лолита',
  'Дмитрий',
  'Вера',
  'Андрей',
  'Анжелика',
  'Вячеслав',
  'Любовь',
  'Максим',
  'Лариса',
  'Дамир',
];

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInt(1,2)}, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    {length:getRandomInt(0, COMMENT_COUNT)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
