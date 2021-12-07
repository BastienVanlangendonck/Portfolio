import React from 'react';

import './style.scss';

import Hardware from 'src/assets/images/cpu.png';
import Musique from 'src/assets/images/music.png';
import Gaming from 'src/assets/images/gaming.png';
import Code from 'src/assets/images/code.png';

const About = () => (
  <div id="about" className="about">
    <h1 className="about-title">A propos de <span className="me">Moi</span></h1>
    <div className="about-bar1" />
    <div className="about-bar2" />
    <h3 className="about-title1">01 - Qui je suis</h3>
    <p className="about-me">
      Bienvenue !
      Je me présente moi c'est Bastien, j'ai 25 ans et j'habite actuellement dans la Drôme.
      Ayant travaillé en tant que technicien informatique pendant 2 ans, je me suis lancé dans
      le developpement Web en suivant la formation O'clock qui m'a permis d'obtenir le Titre
      Professionnel de Developpeur Web et Web Mobile de niveau 5 . <br />
      Pendant cette formation nous avons pu voir PHP et JS principalement,
      j'ai eu un petit faible pour le Front-end donc je me suis lancé sur un mois de
      spécialisation sur React. Je suis désormais a la recherche d'un emploi
      dans le developpement web !
      Si vous cherchez quelqu'un qui a soif de compétences.. Je suis votre homme !
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
