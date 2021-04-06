import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = ({rating, scores_count: score, description, director, starring}) =>
  <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{score} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  </>;

MovieOverview.propTypes = {
  "rating": PropTypes.number.isRequired,
  "scores_count": PropTypes.number.isRequired,
  "description": PropTypes.string.isRequired,
  "director": PropTypes.array.isRequired,
  "starring": PropTypes.array.isRequired
};

export default MovieOverview;


