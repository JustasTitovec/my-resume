import React from 'react';
import './Contacts.css';
import data from '../../data.json';

function Contacts({ lang }) {
  return (
    <div className="contacts">
      <div className="contacts__info">
        <div className="contacts__img">
          <img src={require('../../assets/Picture1.png')} alt="personal" />
        </div>
        <h2>
          Justas <br></br> <span>Titovec</span>
        </h2>
        <p className="contacts__birthDate">
          <span>{data[lang].birthday}</span>
          <span>10/07/1992</span>
        </p>
      </div>

      <div className="contacts__contacts">
        <h2>{data[lang].Contacts}</h2>
        <ul>
          <li style={{ marginLeft: '65px' }}>
            <p className="contacts__contacts__nationality">
              {data[lang].nationality}
            </p>
          </li>
          <li style={{ marginLeft: '65px' }}>
            <p>{data[lang].lytis}</p>
          </li>
          <li className="contacts__adress">
            <i className="fas fa-map-marker-alt"></i>
            <a href="https://www.google.lt/maps/place/Eitmin%C5%B3+g.+18,+Vilnius+12111,+Lietuva/@54.7394847,25.2166266,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd91a23ccda039:0xdefff5a956778f33!8m2!3d54.7394816!4d25.2188153">
              Pitzolstrasse 26, 7310 Bad Ragaz, Switzerland
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:justas.titovec@yahoo.com">
              justas.titovec@yahoo.com
            </a>{' '}
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>

            <a href="tel:+37062248878">Tel. (+370) 62248878</a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>

            <a href="https://www.linkedin.com/in/justas-titovec-69877517a/">
              https://www.linkedin.com/in/<br></br>justas-titovec-69877517a/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
