import React from 'react';

import './style.scss';

import Hardware from 'src/assets/images/cpu.png';
import Musique from 'src/assets/images/music.png';
import Gaming from 'src/assets/images/gaming.png';
import Code from 'src/assets/images/code.png';

const About = () => (
  <div className="about">
    <h1 className="about-title">A propos de <span className="me">Moi</span></h1>
    <div className="about-bar1" />
    <div className="about-bar2" />
    <h3 className="about-title1">01 - Qui je suis</h3>
    <p className="about-me">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
      arcu ultricies, porta nisl ac, tincidunt nulla. Phasellus ut odio maximus,
      vulputate sapien ut, tincidunt dui. alesuada.
    </p>
    <h3 className="about-title2">02 - Passions</h3>
    <div className="about-passions-container">
      <div className="about-items">
        <img className="about-img" src={Hardware} alt="Hardware img" />
        <p className="about-desc">Hardware</p>
      </div>
      <div className="about-items">
        <img className="about-img" src={Musique} alt="Hardware img" />
        <p className="about-desc">Musique</p>
      </div>
      <div className="about-items">
        <img className="about-img" src={Gaming} alt="Hardware img" />
        <p className="about-desc">Gaming</p>
      </div>
      <div className="about-items">
        <img className="about-img" src={Code} alt="Hardware img" />
        <p className="about-desc">Code</p>
      </div>
    </div>
  </div>
);

export default About;
