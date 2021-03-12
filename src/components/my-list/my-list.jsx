import React from 'react';
import Logo from '../logo/logo';
import PropTypes from 'prop-types';
import Avatar from '../page_header/avatar';
import Footer from '../page_footer/page_footer';
import Movies from '../movies/movies';

const MyList = ({movies}) =>
  <div className = "user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">My list</h1>
      <Avatar/>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Movies movies = {movies}/>
    </section>

    <Footer/>
  </div>;

MyList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MyList;
