import React from 'react';
import PropTypes from 'prop-types';

const PageBackground = ({backgroundImage, name}) =>
  <div className="movie-card__bg">
    <img src={backgroundImage} alt={name} />
  </div>;

PageBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PageBackground;
