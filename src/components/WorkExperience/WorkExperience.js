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
            <strong>17/05/2018 – 21/06/2020 </strong> – Galinės g. 1, Galinės k,
            Avižienių sen., LT-14247 Vilniaus raj., Lietuva
          </span>
          <h3>{data[lang].workExperience.seniorManager} </h3>
          <p>UAB Transekspedicija </p>
          <a href="https://www.transekspedicija.lt/">
            https://www.transekspedicija.lt/
          </a>
        </div>

        <div className="WorkExperience__box">
          <span>
            <strong>21/05/2014 – 16/05/2018 </strong> – Galinės g. 1, Galinės k,
            Avižienių sen., LT-14247 Vilniaus raj., Lietuva
          </span>
          <h3>{data[lang].workExperience.tranportManager} </h3>
          <p>UAB Transekspedicija </p>
          <a href="https://www.transekspedicija.lt/">
            https://www.transekspedicija.lt/
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
