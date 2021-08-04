import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Burger from './Burger';
import Menu from './Menu';

const Header = ({ setIsOpen, isOpen }) => (
  <div className="header">
    <h3 className="header-home"><a href="/">H<span className="header-o">o</span>me</a></h3>
    <div className="header-burger" onClick={setIsOpen}>
      <Burger isOpen={isOpen} />
    </div>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
  </div>
);

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;

/* <ul className="header-ul">
      <li className="header-li"><a href="#">Projet</a></li>
      <li className="header-li"><a href="#">A propos de moi</a></li>
      <li className="header-li"><a href="#">Compétences</a></li>
      <li className="header-li"><a href="#">Contact</a></li>
    </ul> */
