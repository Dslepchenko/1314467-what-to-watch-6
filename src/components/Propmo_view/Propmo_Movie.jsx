import React from 'react';
import PropTypes from 'prop-types';
import PromoCard from './promo_card';
import Header from '../Header';

const PromoMovie = ({background_image: bgImage, name, ...rest}) =>
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={bgImage} alt={name} />
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <Header headerClass="page-header movie-card__head"/>
    <PromoCard name={name} {...rest}/>
  </section>;

PromoMovie.propTypes = {
  "name": PropTypes.string.isRequired,
  "background_image": PropTypes.string.isRequired
};

export default PromoMovie;
