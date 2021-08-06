import React from 'react';
import Html from 'src/assets/images/html5.svg';
import Css from 'src/assets/images/css-3.svg';
import Php from 'src/assets/images/php.svg';
import Reacticon from 'src/assets/images/React-icon.svg';
import Wp from 'src/assets/images/wordpress.svg';
import Github from 'src/assets/images/github.png';
import Symfony from 'src/assets/images/Symfony.svg';
import Bootstrap from 'src/assets/images/bootstrap.svg';
import JS from 'src/assets/images/js.svg';

import './style.scss';

const Skills = () => (
  <div className="skills">
    <h3 className="skills-title1">03 - Compétences</h3>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Html} alt="Html5-icon" />
      <p className="skills-text">HTML 5</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-html" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Css} alt="css-icon" />
      <p className="skills-text">CSS 3</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-css" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Php} alt="php-icon" />
      <p className="skills-text">PHP 7</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-php" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Reacticon} alt="react-icon" />
      <p className="skills-text">REACT</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-react" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Wp} alt="wp-icon" />
      <p className="skills-text">WORDPRESS</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-wp" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Github} alt="github-icon" />
      <p className="skills-text">GITHUB</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-github" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Symfony} alt="symfony-icon" />
      <p className="skills-text">SYMFONY</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-symfony" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={Bootstrap} alt="bootstrap-icon" />
      <p className="skills-text">BOOTSTRAP</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-bootstrap" />
      </div>
    </div>
    <div className="skills-items-containers">
      <img className="skills-icon" src={JS} alt="js-icon" />
      <p className="skills-text">JAVASCRIPT</p>
      <div className="skills-bar-container">
        <div className="skills-bar1" />
        <div className="skills-bar2-js" />
      </div>
    </div>
  </div>
);

export default Skills;
