import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Catalog from '../Catalog/Catalog';
import MovieDesc from './Movie_Descriptions';
import MovieBtns from './Movie_Buttons';
import {findMovieById, getSimilarMovies} from '../../mocks/utils';
import {RoutePaths} from '../../mocks/utils';
import {Link} from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const MoviePage = ({match}) => {
  const {id, background_image: background, poster_image: poster, name, genre, ...rest} = findMovieById(match.params.id);
  useEffect(() => window.scrollTo(0, 0));

  return (
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
              <img src={poster} alt={name} width="218" height="327" />
            </div>
            <Tabs genre={genre} {...rest}/>
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
    </>
  );
};

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MoviePage;
