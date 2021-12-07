/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Menu = ({ isOpen, setIsOpen }) => (
  <nav>
    <ul className={classNames('menu', { active: isOpen })}>
      <li className="menu-item"><a href="/#project" className="menu-item-link" activeclassname="menu-item-link--active" onClick={setIsOpen}>Projet</a></li>
      <li className="menu-item"><a href="/#about" className="menu-item-link" activeclassname="menu-item-link--active" onClick={setIsOpen}>A propos de moi</a></li>
      <li className="menu-item"><a href="/#skills" className="menu-item-link" activeclassname="menu-item-link--active" onClick={setIsOpen}>Compétences</a></li>
      <li className="menu-item"><a href="/#contact" className="menu-item-link" activeclassname="menu-item-link--active" onClick={setIsOpen}>Contact</a></li>
    </ul>
  </nav>
);

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Menu;
