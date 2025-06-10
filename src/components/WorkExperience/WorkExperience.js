import React from 'react';
import data from '../../data.json';
import './WorkExperience.css';

function WorkExperience({ lang }) {
  return (
    <div className="WorkExperience">
      <h1>{data[lang].workExperience.title}</h1>
      <div>
        <div className="WorkExperience__box">
          <span>
            <strong>01/11/2021 – Present </strong> – Aludarių g. 3, 01112
            Vilnius, Lietuva
          </span>
          <h3>Fronend / React native Developer</h3>
          <p>Kilo Health</p>
          <a href="https://kilo.health">https://kilo.health</a>
        </div>
        <div className="WorkExperience__box">
          <span>
            <strong>01/09/2021 – 31/10/2021 </strong> – Aludarių g. 3, 01112
            Vilnius, Lietuva
          </span>
          <h3>Internship</h3>
          <p>Kilo Health</p>
          <a href="https://kilo.health">https://kilo.health</a>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
