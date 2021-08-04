import React from 'react';

import './style.scss';

const Header = () => (
  <div className="header">
    <h3 className="header-home"><a href="/">H<span className="header-o">o</span>me</a></h3>
    <ul className="header-ul">
      <li className="header-li"><a href="#">Projet</a></li>
      <li className="header-li"><a href="#">A propos de moi</a></li>
      <li className="header-li"><a href="#">Compétences</a></li>
      <li className="header-li"><a href="#">Contact</a></li>
    </ul>
  </div>
);

export default Header;
