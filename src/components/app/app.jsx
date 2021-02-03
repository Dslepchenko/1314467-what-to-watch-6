import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({title, genre, year, titles}) => {
  return (
    <Main
      title = {title}
      genre = {genre}
      year = {year}
      titles = {titles}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired
};
export default App;
