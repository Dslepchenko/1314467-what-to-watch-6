import {v4 as uuidv4} from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';
import PromoWrap from '../PromoMovieWrap/promoWrap';
import ShowMore from '../btn_show_more/show_more';
import PageFooter from '../page_footer/page_footer';
import Movies from '../movies/movies';
import Genre from '../genres/genres';
import {GENRES} from '../../mocks/const';


const renderList = (value, cb) => value.map(cb);

const Startup = ({movie, movies}) => {
  const getMovie = (item) => <Movies key = {item.id} {...item}/>;
  const getGenre = (item) => <Genre key = {uuidv4()} genre = {item}/>;

  return (
    <>
      <PromoWrap {...movie}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {renderList(GENRES, getGenre)}
          </ul>

          <div className="catalog__movies-list">
            {renderList(movies, getMovie)}
          </div>
          <ShowMore key = {uuidv4()}/>
        </section>
        <PageFooter key = {uuidv4()}/>
      </div>
    </>
  );
};

Startup.propTypes = {
  movie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

export default Startup;
