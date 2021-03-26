import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../mocks/utils';

const ReviewBreadcrimbs = ({name, id}) =>
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`${RoutePath.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>;

ReviewBreadcrimbs.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ReviewBreadcrimbs;
