import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RoutePaths} from '../../mocks/utils';

const Breadcrumbs = ({name, id}) =>
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link className="breadcrumbs__link" to={`${RoutePaths.MOVIE_PAGE}/${id}`}>{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>;

Breadcrumbs.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Breadcrumbs;
