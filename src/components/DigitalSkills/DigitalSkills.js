import React from 'react';
import './DigitalSkills.css';
import data from '../../data.json';

function DigitalSkills({ lang }) {
  return (
    <div className="DigitalSkills">
      <h1>{data[lang].digitalSkills.title}</h1>
      <h3>{data[lang].digitalSkills.skills}</h3>
      <div className="DigitalSkills__skills">
        <li>CSS + HTML</li>
        <li>SASS</li>
        <li>BEM</li>
        <li>JavaScript</li>
        <li>Nodejs(base)</li>
        <li>Reactjs</li>
        <li>Git GitHub</li>
        <li>Bootstrap</li>
        <li>Material UI</li>
      </div>
    </div>
  );
}

export default DigitalSkills;
