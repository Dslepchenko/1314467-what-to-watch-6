import {v4 as uuidv4} from 'uuid';
import {GENRES, STARRING, RATING, NAMES, PREVIEW_IMAGES, DESCRIPTIONS, SCORE_COUNT, RUN_TIME, RELEASED, DIRECTORS, QUANTITY_MOVIES, IMG} from '../mocks/const';
import {getRandomValue, getRandomValueInRange, getRandomBoolean} from '../mocks/utils';

const getRandomMovie = () => ({
  "id": uuidv4(),
  "name": getRandomValue(NAMES),
  "poster": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview": IMG + getRandomValue(PREVIEW_IMAGES),
  "backgroundImage": `img/bg-the-grand-budapest-hotel.jpg`,
  "backgroundColor": `#ffffff`,
  "video_link": ``,
  "preview_video_link": ``,
  "description": DESCRIPTIONS,
  "rating": getRandomValueInRange(RATING.MIN, RATING.MAX),
  "scoresCount": getRandomValueInRange(SCORE_COUNT.MIN, SCORE_COUNT.MAX),
  "director": getRandomValue(DIRECTORS),
  "starring": getRandomValue(STARRING),
  "runTime": getRandomValueInRange(RUN_TIME.MIN, RUN_TIME.MAX),
  "genre": getRandomValue(GENRES),
  "released": getRandomValueInRange(RELEASED.MIN_YEAR, RELEASED.MIN_YEAR),
  "isFavorite": getRandomBoolean()
});

const getMovies = () => new Array(QUANTITY_MOVIES).fill().map(getRandomMovie);
export {getRandomMovie, getMovies};

