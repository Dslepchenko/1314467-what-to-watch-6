import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Breadcrumbs from './Review_Breadcrumbs';
import AddForm from './Review_Form';
import {findMovieById} from '../../mocks/utils';

const AddReview = ({match}) => {
  const {background_image: background, poster_image: poster, name, id} = findMovieById(match.params.id);
  useEffect(() => window.scrollTo(0, 0));
  return (
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
          <img src={poster} alt={name}width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <AddForm/>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  match: PropTypes.object.isRequired
};

export default AddReview;
