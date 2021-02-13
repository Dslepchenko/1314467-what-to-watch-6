import {v4 as uuidv4} from 'uuid';
import React from 'react';
import PageBackground from '../page_background/page_background';
import PageHeader from '../page_header/page_header';
import MovieCard from '../movie_card/movie_card';

const PromoWrap = ({...props}) =>
  <>
    <section className="movie-card">
      <PageBackground key={uuidv4()} {...props} />
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader key={uuidv4()} />
      <MovieCard key={uuidv4()} {...props} />
    </section>
  </>;

export default PromoWrap;
