import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = ({scoresCount, rating, description, director, starring}) =>
  <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  </>;

MovieOverview.propTypes = {
  scoresCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.array.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired
};

export default MovieOverview;
