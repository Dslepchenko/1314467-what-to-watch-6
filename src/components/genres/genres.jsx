import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

const Genre = (props) =>
  <li key={uuidv4()} className="catalog__genres-item catalog__genres-item">
    <a href="#" className="catalog__genres-link">{props.genre}</a>
  </li>;

Genre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Genre;
