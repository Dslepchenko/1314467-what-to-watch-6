import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({previewImg, previewLink}) => {
  const videoRef = useRef();

  useEffect(() =>{
    videoRef.current.play();
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current = null;
      }
    };
  });

  return (
    <video className="player__video"
      src={previewLink}
      poster={previewImg}
      ref={videoRef}
      muted={true}>
    </video>
  );
};

VideoPlayer.propTypes = {
  previewImg: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
};

export default VideoPlayer;
