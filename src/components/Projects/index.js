import React from 'react';
import Toshokan from 'src/assets/toshokan.png';

import './style.scss';

const Projects = () => (
  <div className="project">
    <p className="project-projet">Projet</p>
    <p className="project-toshokan">Tosh<span className="project-o">O</span>kan</p>
    <div className="project-bar1" />
    <div className="project-bar2" />
    <p className="project-oclock">Projet développé en équipe lors de la formation O'clock .</p>
    <img className="project-img" src={Toshokan} alt="toshokan-img" />
    <div className="project-button-container">
      <a href="https://toshokan-ripley.netlify.app/"><button className="project-button" type="button"> Détails </button></a>
    </div>
  </div>
);

export default Projects;
