import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({title, genre, year, titles, genres, avatar, bgImage, showMoreBtn}) =>

  <Main
    title = {title}
    genre = {genre}
    year = {year}
    titles = {titles}
    genres = {genres}
    avatar = {avatar}
    bgImage = {bgImage}
    showMoreBtn = {showMoreBtn}/>;


App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  avatar: PropTypes.array.isRequired,
  bgImage: PropTypes.array.isRequired,
  showMoreBtn: PropTypes.string.isRequired
};
export default App;
