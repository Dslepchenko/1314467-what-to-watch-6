import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movies/movie';


const MoviesList = ({movies}) =>
  <div className="catalog__movies-list">
    {movies.map(Movie)}
  </div>;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};
