import React from 'react';
import PropTypes from 'prop-types';
import GenresList from './Genres';
import Movies from './cards_list';
import ShowMoreBtn from './Button_Show_more';

const Catalog = ({movies, showGenres = true, showBtn = true, catalogClass, children}) =>
  <section className={catalogClass}>
    {children}
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    {showGenres && <GenresList/>}
    <Movies movies={movies}/>
    {showBtn && <ShowMoreBtn/>}
  </section>;

Catalog.propTypes = {
  movies: PropTypes.array.isRequired,
  showGenres: PropTypes.bool,
  showBtn: PropTypes.bool,
  catalogClass: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Catalog;
