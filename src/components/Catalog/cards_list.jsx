import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SmallCard from '../Catalog/small_card';

const Movies = ({movies}) => {
  const [currentMovieId, setCurrentMovieId] = useState({
    movieId: ``
  });
  const handleMovieCardMouseEnter = (id) => {
    setCurrentMovieId({...currentMovieId, movieId: id});
  };

  return (
    <div className="catalog__movies-list">
      {movies.map(({id, ...rest}) => <SmallCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={handleMovieCardMouseEnter} />)}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};
export default Movies;
