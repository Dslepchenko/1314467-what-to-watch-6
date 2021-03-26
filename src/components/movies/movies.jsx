import React from 'react';
import PropTypes from 'prop-types';
import {RoutePath} from '../../mocks/utils';
import {Link} from 'react-router-dom';

const getMovie = (props) =>
  <article key={props.id} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={props.preview} alt="Pulp Fiction" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${RoutePath.FILMS}/${props.id}`} className="small-movie-card__link">{props.name}</Link>
    </h3>
  </article>;

const Movies = ({movies}) =>
  <div className="catalog__movies-list">
    {movies.map(getMovie)}
  </div>;

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
