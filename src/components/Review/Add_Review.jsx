import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Breadcrumbs from './Review_Breadcrumbs';
import AddForm from './Review_Form';

const AddReview = ({background_image: background, name, id}) =>
  <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={background} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header headerClass="page-header">
        <Breadcrumbs id={id} name={name}/>
      </Header>
      <div className="movie-card__poster movie-card__poster--small">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt={name}width="218" height="327" />
      </div>
    </div>
    <div className="add-review">
      <AddForm/>
    </div>
  </section>;

AddReview.propTypes = {
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired
};

export default AddReview;
