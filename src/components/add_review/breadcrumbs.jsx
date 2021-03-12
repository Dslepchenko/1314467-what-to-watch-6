import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PATH} from '../../mocks/utils';

const ReviewBreadcrimbs = ({name}) => {
  const filmPage = `${PATH.FILM}`;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={filmPage} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

ReviewBreadcrimbs.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReviewBreadcrimbs;
