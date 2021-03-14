import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import Avatar from '../page_header/avatar';
import Footer from '../page_footer/page_footer';
import Movies from '../movies/movies';
import PageBackground from '../page_background/page_background';
import MovieDescription from '../movie_card/movie_card_description';
import MovieButtons from '../movie_card/movie_card_buttons';
import MovieOverview from '../movie_card/movie_card_overview';

const Film = ({movies, movie}) =>
  <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <PageBackground {...movie} />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo />
          <Avatar />
        </header>
        <div className="movie-card__wrap">
          <MovieDescription {...movie}>
            <MovieButtons>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </MovieButtons>
          </MovieDescription>
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
                  <Link to="#" className="movie-nav__link">Overview</Link>
                </li>
                <li className="movie-nav__item">
                  <Link to="#" className="movie-nav__link">Details</Link>
                </li>
                <li className="movie-nav__item">
                  <Link to="#" className="movie-nav__link">Reviews</Link>
                </li>
              </ul>
            </nav>
            <MovieOverview {...movie} />
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <Movies movies={movies} />
      </section>
      <Footer />
    </div>
  </>;

Film.propTypes = {
  movies: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired
};


export default Film;
