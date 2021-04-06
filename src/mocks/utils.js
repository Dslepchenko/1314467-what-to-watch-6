import {Movies} from '../mocks/mocks';

export const getRandomIntInRange = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomInt = (maxNumber) => getRandomIntInRange(maxNumber - 1);

export const findMovieById = (item) => Movies.find(({id}) => id.toString() === item.toString());

export const getSimilarMovies = (currentMovieId, currentMovieGenre) => {
  const allMoviesSameGenre = Movies.filter(({id, genre}) => genre === currentMovieGenre && id !== currentMovieId);
  const similarMoviesToShow = allMoviesSameGenre.slice(0, 10);
  return similarMoviesToShow;
};

export const RoutePaths = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films`,
  REVIEW: `/review`,
  PLAYER: `/player`
};

export const tabsNames = [`Overview`, `Details`, `Reviews`];
