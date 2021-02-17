import React from 'react';
import PageBackground from '../page_background/page_background';
import PageHeader from '../page_header/page_header';
import MovieCard from '../movie_card/movie_card';

const PromoWrap = ({...props}) =>
  <section className="movie-card">
    <PageBackground {...props} />
    <h1 className="visually-hidden">WTW</h1>
    <PageHeader/>
    <MovieCard {...props} />
  </section>;

export default PromoWrap;
