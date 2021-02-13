import React from 'react';
import PropTypes from 'prop-types';

const Genre = (props) =>
  <li className="catalog__genres-item catalog__genres-item">
    <a href="#" className="catalog__genres-link">{props.genre}</a>
  </li>;

Genre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Genre;
