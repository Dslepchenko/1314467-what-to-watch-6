import React from 'react';
import PropTypes from 'prop-types';
import PromoMovie from './Propmo_view/Propmo_Movie';
import Footer from './Footer';
import Catalog from './Catalog/Catalog';

const Main = ({movies, movie}) =>
  <>
    <PromoMovie {...movie}/>
    <div className="page-content">
      <Catalog
        movies={movies}
        catalogClass="catalog"/>
      <Footer/>
    </div>
  </>;

Main.propTypes = {
  movies: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired
};

export default Main;
