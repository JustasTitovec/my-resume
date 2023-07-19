import React from 'react';
import './EducationAndTraining.css';
import data from '../../data.json';

function EducationAndTraining({ lang }) {
  return (
    <div className="EducationAndTraining">
      <h1>{data[lang].education.title}</h1>
      <div>
        <div className="EducationAndTraining__box">
          <span>
            <strong>20/10/2022 – 23/10/2022</strong> – London
          </span>
          <h3>{data[lang].education.conference}</h3>
          <p>React Advanced London</p>
          <a href="https://reactadvanced.com">https://reactadvanced.com</a>
        </div>
        <div className="EducationAndTraining__box">
          <span>
            <strong>13/01/2020 – 31/07/2020</strong> – Antakalnio g. 17,
            Vilnius, Lithuania
          </span>
          <h3>{data[lang].education.diplomasCodeAdv} </h3>
          <p>CodeAcademy </p>
          <a href="https://www.codeacademy.lt/">https://www.codeacademy.lt/</a>
        </div>

        <div className="EducationAndTraining__box">
          <span>
            <strong>20/09/2019 – 06/12/2019 </strong> – Antakalnio g. 17,
            Vilnius, Lithuania
          </span>
          <h3>{data[lang].education.diplomasCodeBeg} </h3>
          <p>CodeAcademy </p>
          <a href="https://www.codeacademy.lt/">https://www.codeacademy.lt/</a>
        </div>
        <div className="EducationAndTraining__box">
          <span>
            <strong>01/09/2011 – 10/06/2014</strong> – Saulėtekio al. 11,
            Vilnius, Lithuania
          </span>
          <h3>{data[lang].education.diplomasVGTU}</h3>
          <p>Vilniaus Gedimino technikos universitetas </p>
          <a href="https://www.vgtu.lt">https://www.vgtu.lt</a>
        </div>
      </div>
    </div>
  );
}

export default EducationAndTraining;
