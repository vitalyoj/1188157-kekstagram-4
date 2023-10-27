// Вспомогательная функция для получения случайного числа в диапазоне [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomInt};
