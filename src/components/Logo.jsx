import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {RoutePaths} from '../mocks/utils';

const Logo = ({isLogoLight = false}) =>
  <div className="logo">
    <Link className={cn(`logo__link `, {'logo__link--light': isLogoLight})} to={RoutePaths.MAIN}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>;

Logo.propTypes = {
  isLogoLight: PropTypes.bool
};
export default Logo;
