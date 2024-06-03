import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer__copyright">
      <p>@{new Date().getFullYear()} Farmlify</p>
    </div>
  </div>
);

export default Footer;
