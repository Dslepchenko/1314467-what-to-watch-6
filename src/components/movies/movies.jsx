import React from 'react';
import PropTypes from 'prop-types';


const getMovie = (props) =>
  <article key={props.id} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={props.preview} alt="Pulp Fiction" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{props.name}</a>
    </h3>
  </article>;


// getMovie.propTypes = {
//   name: PropTypes.string.isRequired,
//   preview: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired
// };

const Movies = ({movies}) =>
  <div className="catalog__movies-list">
    {movies.map(getMovie)}
  </div>;

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
