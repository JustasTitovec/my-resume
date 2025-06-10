import React from 'react';
import data from '../../data.json';
import './LanguageSkills.css';

function LanguageSkills({ lang }) {
  return (
    <div className="LanguageSkills">
      <h1>{data[lang].languageSkills.title}</h1>
      <h3>{data[lang].languageSkills.motherTongue}</h3>
      <div className="LanguageSkills__box">
        <div>
          <h3>{data[lang].languageSkills.language.English}</h3>
        </div>
        <div className="LanguageSkills__rate">
          <div>
            <p>{data[lang].languageSkills.skill.Listening}</p>
            <h4>C1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Reading}</p>
            <h4>C1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Speaking}</p>
            <h4>B2</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Writing}</p>
            <h4>B2</h4>
          </div>
        </div>
      </div>
      <div className="LanguageSkills__box">
        <div>
          <h3>{data[lang].languageSkills.language.Russian}</h3>
        </div>
        <div className="LanguageSkills__rate">
          <div>
            <p>{data[lang].languageSkills.skill.Listening}</p>
            <h4>C2</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Reading}</p>
            <h4>C1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Speaking}</p>
            <h4>C1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Writing}</p>
            <h4>B2</h4>
          </div>
        </div>
      </div>
      <div className="LanguageSkills__box">
        <div>
          <h3>{data[lang].languageSkills.language.German}</h3>
        </div>
        <div className="LanguageSkills__rate">
          <div>
            <p>{data[lang].languageSkills.skill.Listening}</p>
            <h4>A1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Reading}</p>
            <h4>A1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Speaking}</p>
            <h4>A1</h4>
          </div>
          <div>
            <p>{data[lang].languageSkills.skill.Writing}</p>
            <h4>A1</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageSkills;
