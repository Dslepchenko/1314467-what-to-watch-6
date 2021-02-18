import React from 'react';
import PropTypes from 'prop-types';


const Movies = (props) =>
  <article key={props.id} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={props.preview} alt="Pulp Fiction" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{props.name}</a>
    </h3>
  </article>;


Movies.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Movies;
