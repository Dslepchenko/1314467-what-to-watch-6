import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Catalog from './Catalog';

const MyList = ({movies}) => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <div className="user-page">
      <Header headerClass="page-header user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>
      <Catalog
        movies={movies}
        showGenres={false}
        showBtn={false}
        catalogClass="catalog"/>
      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MyList;
