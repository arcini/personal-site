import React, { useEffect, useState } from "react";
import './App.css';

function MainPage({}) {
  return (
    <div className="App">
    </div>
  );
}

function Icon({imgName, caption}) {
  return (
    <div className="Clickable-Icon">
      <img src={imgName} width={128}></img>
      <p>{caption}</p>
    </div>
  )
}

function Icons({toggleAbout, toggleProjects, toggleContact}) {
  return (
    <div className="Icons-Container">
      <button onClick={() => toggleAbout() }>
        <Icon 
          imgName='clippy.png'
          caption='About Me'
        />
      </button>
      <div class="break"></div> 
      <button onClick={() => toggleProjects() }>
        <Icon 
          imgName='projects.png'
          caption='Projects'
        />
      </button>
      <div class="break"></div> 
      <button onClick={() => toggleContact() }>
        <Icon 
          imgName='contact_card.png'
          caption='Contact'
        />
      </button>
    </div>
  )
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
      />
      {aboutIsOpen && <AboutMe />}
      {projectsIsOpen && <Projects />}
      {contactIsOpen && <Contact />}
      <Icons
        toggleAbout={toggleAbout}
        toggleProjects={toggleProjects}
        toggleContact={toggleContact}
      />
    </div>
  )
}

export default App;

