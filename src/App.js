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

function Icons({setAboutIsOpen, setProjectsIsOpen, setContactIsOpen}) {
  return (
    <div className="Icons-Container">
      <button onClick={() => setAboutIsOpen(true) } className="Icon-Button">
        <Icon 
          imgName='clippy.png'
          caption='About Me'
        />
      </button>
      <div className="break"></div> 
      <button onClick={() => setProjectsIsOpen(true) } className="Icon-Button">
        <Icon 
          imgName='projects.png'
          caption='Projects'
        />
      </button>
      <div className="break"></div> 
      <button onClick={() => setContactIsOpen(true) } className="Icon-Button">
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

function ClockDiv() {
  const [time, setTime] = useState()

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()
      const currentTime = dateObject.toLocaleTimeString();
      
      setTime(currentTime)
    }, 1000)

  }, [])

  return <div className="Clock">{time}</div>
}

function BottomBar() {
  return (
    <div className="Bottom-Bar-Border-Wrapper">
      <div className="Bottom-Bar">
        <button>
          <img src="win98_start.png" height={36} />
        </button>
        <div className="Clock-Wrapper">
          <ClockDiv />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  
  return (
    <div>
      <MainPage
      />
      {aboutIsOpen && <AboutMe />}
      {projectsIsOpen && <Projects />}
      {contactIsOpen && <Contact />}
      <Icons
        setAboutIsOpen={setAboutIsOpen}
        setProjectsIsOpen={setProjectsIsOpen}
        setContactIsOpen={setContactIsOpen}
      />
      <BottomBar />
    </div>
  )
}

export default App;

