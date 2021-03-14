import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PATH} from '../../mocks/utils';

const Logo = ({isLogoLight = false}) =>
  <div className="logo">
    <Link to={PATH.MAIN} className={cn(`logo__link `, {'logo__link--light': isLogoLight})}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>;

Logo.propTypes = {
  isLogoLight: PropTypes.bool
};

export default Logo;
