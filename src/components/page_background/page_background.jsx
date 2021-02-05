import React from 'react';
import PropTypes from 'prop-types';

const PageBackground = ({bgImage}) =>

  <div className="movie-card__bg">
    <img src={bgImage} alt="The Grand Budapest Hotel" />
  </div>;

PageBackground.propTypes = {
  bgImage: PropTypes.array.isRequired
};

export default PageBackground;
