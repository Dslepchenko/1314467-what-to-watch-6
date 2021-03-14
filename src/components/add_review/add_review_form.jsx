import React from 'react';
import PropTypes from 'prop-types';
import {RATING} from '../../mocks/const';

const GetRatingStars = ({index}) => {
  const starNumber = RATING[index];
  const inputID = `star-${starNumber}`;
  const ratingNumber = `Rating ${starNumber}`;

  return (
    <>
      <input className="rating__input" id={inputID} type="radio" name="rating" value={starNumber}/>
      <label className="rating__label" htmlFor={inputID}>{ratingNumber}</label>
    </>
  );
};

const AddForm = () =>
  <div className="add-review">
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array(RATING.length).fill().map((item, i) => <GetRatingStars key={i} index={i}/>)};
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  </div>;

GetRatingStars.propTypes = {
  index: PropTypes.number.isRequired
};

export default AddForm;
