import React, { useEffect, useState } from "react";
import './App.css';

function MainPage({toggleAbout, toggleProjects, toggleContact}) {
  return (
    <div className="App">
        <div className="Big-Name">Alex Cini</div>
        <div class="break"></div> 
        <div className='Main-List'>
          <button onClick={() => toggleAbout() }>
            <div className='Main-List-Element'>
              <div className='Main-List-Bullet' style={{color: 'maroon'}}>▼</div>
              <div className='Main-List-Text'>About Me</div>
            </div>
          </button>
          <button onClick={() => toggleProjects() }>
            <div className='Main-List-Element'>
              <div className='Main-List-Bullet' style={{color: 'forestgreen'}}>▼</div>
              <div className='Main-List-Text'>Projects</div>
            </div>
          </button>
          <button onClick={() => toggleContact() }>
            <div className='Main-List-Element'>
              <div className='Main-List-Bullet' style={{color: 'darkblue'}}>▼</div>
              <div className='Main-List-Text'>Contact</div>
            </div>
          </button>
        </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="Popout-Container About-Me">
      <h1>About Me</h1>
      <p>Text about me lorem ipsum.</p>
    </div>
  )
}

function Projects() {
  return (
    <div className="Popout-Container Projects">
      <h1>Projects</h1>
      <p>Project stuff</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="Popout-Container Contact">
      <h1>Contact</h1>
      <a href="mailto:alexrcini@gmail.com">alexrcini@gmail.com</a>
    </div>
  )
}

function App() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const toggleAbout = () => {
    setAboutIsOpen((aboutIsOpen) => !aboutIsOpen);
  }

  const toggleProjects = () => {
    setProjectsIsOpen((projectsIsOpen) => !projectsIsOpen);
  }

  const toggleContact = () => {
    setContactIsOpen((contactIsOpen) => !contactIsOpen);
  }
  
  return (
    <div>
      <MainPage 
        toggleAbout={toggleAbout}
        toggleProjects={toggleProjects}
        toggleContact={toggleContact}
      />
      {aboutIsOpen && <AboutMe />}
      {projectsIsOpen && <Projects />}
      {contactIsOpen && <Contact />}
    </div>
  )
}

export default App;

