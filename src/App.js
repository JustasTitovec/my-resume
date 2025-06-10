import React from 'react';
import Contacts from './components/Contracts/Contacts.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import EducationAndTraining from './components/EducationAndTraining/EducationAndTraining.js';
import DigitalSkills from './components/DigitalSkills/DigitalSkills.js';
import WorkExperience from './components/WorkExperience/WorkExperience.js';
import './App.css';
import LanguageSkills from './components/LanguageSkills/LanguageSkills.js';

function App() {
  const [lang, setLang] = React.useState('de');

  function changeLanguage(event) {
    setLang(event.target.value);
  }

  return (
    <div className="App">
      <div className="App__sidebar">
        <Contacts lang={lang} />
      </div>
      <div className="App__right">
        <AboutMe lang={lang} onChange={changeLanguage} />
        <DigitalSkills lang={lang} />
        <WorkExperience lang={lang} />
        <EducationAndTraining lang={lang} />
        <LanguageSkills lang={lang} />
      </div>
    </div>
  );
}

export default App;
