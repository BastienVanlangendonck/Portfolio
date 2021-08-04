import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Burger = ({ isOpen }) => (
  <div className="burger">
    <div className={classNames('burger-bar1', { active: isOpen })} />
    <div className={classNames('burger-bar2', { active: isOpen })} />
    <div className={classNames('burger-bar3', { active: isOpen })} />
  </div>
);

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Burger;
