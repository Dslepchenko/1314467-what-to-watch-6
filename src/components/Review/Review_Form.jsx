import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {RAITING} from '../../mocks/mocks';

const GetRaiting = ({index, onRatingChange}) => {
  const IdRaiting = RAITING[index];
  const inputId = `star-${IdRaiting}`;
  const labelId = `Raiting ${IdRaiting}`;
  return (
    <>
      <input onChange={onRatingChange} className="rating__input" id={inputId} type="radio" name="rating" value={IdRaiting}/>
      <label className="rating__label" htmlFor={inputId}>{labelId}</label>
    </>
  );
};

const AddForm = () => {
  const [reviewForm, setReviewForm] = useState({
    "raiting": ``,
    "review-text": ``,
  });

  const handleFormSubmit = (evt) =>
    evt.preventDefault();

  const handleUserInput = ({target}) => {
    const {name, value} = target;
    setReviewForm({...reviewForm, [name]: value});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {RAITING.map((item) => <GetRaiting key={`raiting-${item}`} index={item} onRatingChange={handleUserInput}/>)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea onBlur={handleUserInput} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

GetRaiting.propTypes = {
  index: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default AddForm;
