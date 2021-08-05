import React from 'react';
import Toshokan from 'src/assets/images/toshokan.png';

import './style.scss';

const Projects = () => (
  <div className="project">
    <p className="project-projet">Projet</p>
    <p className="project-toshokan">Tosh<span className="project-o">O</span>kan</p>
    <div className="project-bar1" />
    <div className="project-bar2" />
    <p className="project-oclock">Projet développé en équipe lors de la formation O'clock .</p>
    <Toshokan />
  </div>
);

Projects.propTypes = {

};

export default Projects;
