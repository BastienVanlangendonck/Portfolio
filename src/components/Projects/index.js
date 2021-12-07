import React from 'react';
import Toshokan from 'src/assets/toshokan.png';

import './style.scss';

const Projects = () => (
  <div id="project" className="project">
    <p className="project-projet">Projet</p>
    <p className="project-toshokan">Tosh<span className="project-o">O</span>kan</p>
    <div className="project-bar1" />
    <div className="project-bar2" />
    <div className="project-container">
      <p className="project-oclock">Projet développé en équipe lors de la formation O'clock .</p>
      <img className="project-img" src={Toshokan} alt="toshokan-img" />
      <p className="project-description"> Toshokan 図書館, veut dire "bibliothèque" en japonais , c'est une application web facilitant la gestion d’une collection manga. Ce Projet à été dévelopé par 5 personnes. Il y avait 3 personnes sur le front dont moi même et 2 sur le back. </p>
      <div className="project-button-container">
        <a className="project-a" href="https://toshokan-ripley.netlify.app/"><button className="project-button" type="button"> Accès au site </button></a>
      </div>
    </div>
  </div>
);

export default Projects;
