import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RoutePaths} from '../../mocks/utils';
import VideoPlayer from '../Video_Player';

const SmallCard = ({movieId, name, preview_image: previewImg, preview_video_link: previewLink}) => {
  const [startPlayer, setStartPlayer] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {

    return () =>{
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  });

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        setTimer(() => setTimeout(() => setStartPlayer(true), 1000));
      }}
      onMouseLeave={() => {
        clearTimeout(timer);
        setTimer(null);
        setStartPlayer(false);
      }}
    >
      <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}></Link>
      <div className="small-movie-card__image">
        {startPlayer ? <VideoPlayer previewLink={previewLink} previewImg={previewImg}/> : <img src={previewImg} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`} onClick={() => setStartPlayer(false)}>{name}</Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  "preview_image": PropTypes.string.isRequired,
  "preview_video_link": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "movieId": PropTypes.number.isRequired,
  "onMovieCardMouseEnter": PropTypes.func.isRequired
};

export default SmallCard;
