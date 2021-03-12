const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomValueInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomBoolean = () => Boolean(getRandomValue(0, 1));
const getObjectsArray = (number, obj) => new Array(number).fill().map(obj);

export {getRandomValue, getRandomValueInRange, getRandomBoolean, getObjectsArray};

export const PATH = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`
};

