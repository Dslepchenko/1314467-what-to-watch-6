import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RoutePaths} from '../../mocks/utils';

const SmallCard = ({movieId, name, preview_image: preview, onMovieCardMouseEnter}) => {
  const handleCardMouseEnter = () => {
    onMovieCardMouseEnter(movieId);
  };

  return (
    <article onMouseEnter={handleCardMouseEnter} className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}></Link>
      <div className="small-movie-card__image">
        <img src={preview} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>{name}</Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  "preview_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "movieId": PropTypes.number.isRequired,
  "onMovieCardMouseEnter": PropTypes.func.isRequired
};

export default SmallCard;
