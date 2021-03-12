import React from 'react';
import PropTypes from 'prop-types';
import PromoWrap from '../PromoMovieWrap/promoWrap';
import ShowMore from '../btn_show_more/show_more';
import PageFooter from '../page_footer/page_footer';
import Movies from '../movies/movies';
import GenresList from '../genres/genres';

const Main = ({movie, movies}) =>
  <>
    <PromoWrap {...movie}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <GenresList/>
        </ul>

        <Movies movies = {movies}/>
        <ShowMore/>
      </section>
      <PageFooter/>
    </div>
  </>;

Main.propTypes = {
  movie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

export default Main;
