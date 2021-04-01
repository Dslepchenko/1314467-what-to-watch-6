import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Catalog from '../Catalog/Catalog';
import MovieDesc from './Movie_Descriptions';
import MovieBtns from './Movie_Buttons';
import MovieOverview from './Movie_Overview';
import {getSimilarMovies} from '../../mocks/utils';
import {RoutePaths} from '../../mocks/utils';
import {Link} from 'react-router-dom';

const MoviePage = ({id, background_image: background, name, genre, ...rest}) =>
  <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header headerClass="page-header movie-card__head"/>
        <div className="movie-card__wrap">
          <MovieDesc
            name={name}
            genre={genre}
            {...rest}>
            <MovieBtns>
              <Link className="btn movie-card__button" to={`${RoutePaths.MOVIE_PAGE}/${id}${RoutePaths.REVIEW}`}>Add review</Link>
            </MovieBtns>
          </MovieDesc>
        </div>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>
            <MovieOverview {...rest}/>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <Catalog
        movies={getSimilarMovies(id, genre)}
        catalogClass="catalog catalog--like-this"
        showBtn={false}
        showGenres={false}>
        <h2 className="catalog__title">More like this</h2>
      </Catalog>
      <Footer/>
    </div>
  </>;

MoviePage.propTypes = {
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired
};

export default MoviePage;
