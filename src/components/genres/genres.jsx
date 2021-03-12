import React from 'react';
import PropTypes from 'prop-types';
import {GENRES} from '../../mocks/const';

const GetGenre = ({genre}) => (
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>
);

const GenresList = () => (
  <ul className="catalog__genres-list">
    {GENRES.map((genre, i) => <GetGenre key={i} genre={genre}/>)}
  </ul>
);

GetGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default GenresList;
