import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({showMoreBtn}) =>

  <div className="catalog__more">
    <button className="catalog__button" type="button">{showMoreBtn}</button>
  </div>;

ShowMore.propTypes = {
  showMoreBtn: PropTypes.string.isRequired
};

export default ShowMore;

