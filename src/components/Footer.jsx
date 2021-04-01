import React from 'react';
import Logo from './Logo';

const Footer = () =>
  <footer className="page-footer">
    <Logo isLogoLight/>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>;

export default Footer;
