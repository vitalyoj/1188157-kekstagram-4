// Вспомогательная функция для получения случайного числа в диапазоне [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Вспомогательная функция #2 - поиск рандомного элемента массива

const getRandomArrayElement = (array) =>
  array[getRandomInt(0, array.length - 1)];

// Вспомогательная функция #3 - генерация ID

function createIdGenerator () {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export {getRandomInt, getRandomArrayElement, createIdGenerator};

