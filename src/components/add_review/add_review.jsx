import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../page_header/avatar';
import Logo from '../logo/logo';
import ReviewBreadcrimbs from './breadcrumbs';
import PageBackground from '../page_background/page_background';
import AddForm from './add_review_form';


const AddReview = ({movie}) =>
  <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <PageBackground {...movie}/>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo isLogoLight/>
        <ReviewBreadcrimbs {...movie}/>
        <Avatar/>
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={movie.poster} alt={movie.name} width="218" height="327" />
      </div>
    </div>
    <AddForm/>
  </section>;

AddReview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default AddReview;
