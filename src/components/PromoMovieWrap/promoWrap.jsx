import React from 'react';
import PageBackground from '../page_background/page_background';
import Logo from '../logo/logo';
import MovieDescription from '../movie_card/movie_card_description';
import MovieButtons from '../movie_card/movie_card_buttons';
import Avatar from '../page_header/avatar';

const PromoWrap = ({...props}) =>
  <section className="movie-card">
    <PageBackground {...props} />
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header movie-card__head">
      <Logo/>
      <Avatar/>
    </header>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
        <MovieDescription {...props}>
          <MovieButtons/>
        </MovieDescription>
      </div>
    </div>
  </section>;

export default PromoWrap;
