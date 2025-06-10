import React from 'react';
import './AboutMe.css';
import data from '../../data.json';

function AboutMe({ lang, onChange }) {
  return (
    <div className="aboutMe">
      <div className="aboutMe__lang">
        <p>{data[lang].language} </p>
        <select onChange={onChange} className="aboutMe__select">
          <option value="de">🇩🇪 Deutsch</option>
          <option value="en">🇬🇧 English</option>
          <option value="lt">🇱🇹 Lietuvių</option>
        </select>
      </div>
      <h1 className="aboutMe__title">{data[lang].aboutMe}</h1>
      <p>{data[lang].about}</p>
    </div>
  );
}

export default AboutMe;
