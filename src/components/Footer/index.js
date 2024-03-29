import React from 'react';

import './style.scss';

const Footer = () => (
  <div id="cotact" className="footer">
    <ul className="footer-list">
      <a href="mailto:bastien.vanlan@gmail.com"><li className="footer-items">bastien.vanlan@gmail.com</li></a>
      <a href="https://www.linkedin.com/in/bastien-vanlangendonck-01253b213"><li className="footer-items">LinkedIn</li></a>
      <a href="https://github.com/BastienVanlangendonck"><li className="footer-items">GitHub</li></a>
      <a className="link-cv" href="https://bastienvanlan.netlify.app/src/assets/docs/cv.pdf"><li className="footer-items-cv">CV</li></a>
    </ul>
  </div>

);

export default Footer;
