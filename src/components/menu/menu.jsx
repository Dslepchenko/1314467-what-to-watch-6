import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({genre}) =>

  <li className="catalog__genres-item catalog__genres-item">
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>;


Menu.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Menu;
