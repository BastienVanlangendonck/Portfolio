import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Skills = ({ skills }) => {
  console.log();
  return (
    <div id="skills" className="container">
      <h3 className="skills-title1">03 - Compétences</h3>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.title} className="skills-items-containers">
            <img className="skills-icon" src={skill.picture} alt={skill.alt} />
            <div className="skills-data">
              <p className="skills-text">{skill.title}</p>
              <div className="skills-bar">
                <div className="skills-bar-progression" style={{ width: `${skill.progression}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
