import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const Header = ({children, headerClass}) =>
  <header className={headerClass}>
    <Logo/>
    {children}
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  </header>;

Header.propTypes = {
  isUserPage: PropTypes.bool,
  children: PropTypes.node,
  headerClass: PropTypes.string.isRequired
};

export default Header;
