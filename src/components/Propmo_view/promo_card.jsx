import React from 'react';
import PropTypes from 'prop-types';
import MovieBtns from '../Movie_Page/Movie_Buttons';

const PromoCard = ({name, poster_image: image, genre, released}) =>
  <div className="movie-card__wrap">
    <div className="movie-card__info">
      <div className="movie-card__poster">
        <img src={image} alt={`${name} poster`} width="218" height="327" />
      </div>

      <div className="movie-card__desc">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{released}</span>
        </p>
        <MovieBtns/>
      </div>
    </div>
  </div>;

PromoCard.propTypes = {
  "name": PropTypes.string.isRequired,
  "poster_image": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired,
  "released": PropTypes.number.isRequired
};

export default PromoCard;
