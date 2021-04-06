import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {tabsNames} from '../../mocks/utils';
import MovieOverview from '../Tabs/Movie_Overview';
import MovieDetails from './Movie_Details';
import MovieReviews from './Movie_Review';

const Tabs = ({genre, ...rest}) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (evt) => evt.preventDefault();

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsNames.map((tab, i) => (
            <li key={i} className={(activeTab === i) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={() => setActiveTab(i)}>
              <a href="#" className="movie-nav__link" onClick={handleClick}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {(activeTab === 0) && <MovieOverview {...rest}/>}
      {(activeTab === 1) && <MovieDetails genre={genre} {...rest}/>}
      {(activeTab === 2) && <MovieReviews/>}
    </div>
  );
};

Tabs.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Tabs;

