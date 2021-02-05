import {v4 as uuidv4} from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie_card/movie_card';
import Movies from '../movies/movies';
import Menu from '../menu/menu';
import PageHeader from '../page_header/page_header';
import PageBackground from '../page_background/page_background';
import ShowMore from '../btn_show_more/show_more';
import PageFooter from '../page_footer/page_footer';

const renderLists = (value, callbackFunction) => value.map((item, i) => callbackFunction(item, i));


const Main = ({title, genre, year, titles, genres, avatar, bgImage, showMoreBtn}) => {
  const getMovies = (item) => <Movies key = {uuidv4()} title={item}/>;
  const getGenresList = (item) => <Menu key = {uuidv4()} genre = {item}/>;
  const getMovieCard = <MovieCard key = {uuidv4()} title = {title} genre = {genre} year = {year}/>;
  const getPageHeader = <PageHeader key = {uuidv4()} avatar = {avatar}/>;
  const getBgImage = <PageBackground key = {uuidv4()} bgImage = {bgImage}/>;
  const getShowMoreBtn = <ShowMore key = {uuidv4()} showMoreBtn = {showMoreBtn}/>;
  const getPageFooter = <PageFooter key = {uuidv4()}/>;

  const renderMovies = renderLists(titles, getMovies);
  const renderGenres = renderLists(genres, getGenresList);


  return (
    <>
      <section className="movie-card">
        {getBgImage}
        <h1 className="visually-hidden">WTW</h1>
        {getPageHeader}
        {getMovieCard}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {renderGenres}
          </ul>

          <div className="catalog__movies-list">
            {renderMovies}
          </div>
          {getShowMoreBtn}
        </section>
        {getPageFooter}
      </div>
    </>
  );
};

Main.propTypes = {

  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  avatar: PropTypes.array.isRequired,
  bgImage: PropTypes.array.isRequired,
  showMoreBtn: PropTypes.string.isRequired
};

export default Main;
