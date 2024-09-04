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
      <img src={imgName} width={96}></img>
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

function AboutMe({ setAboutIsOpen }) {
  return (
    <div className="Popout-Container About-Me">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setAboutIsOpen(false)}>X</button>
      </div>
      <div className="Window-Content-Area">
        <h1>About Me</h1>
        <p>Text about me lorem ipsum.</p>
      </div>
    </div>
  )
}

function Projects({ setProjectsIsOpen }) {
  return (
    <div className="Popout-Container Projects">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setProjectsIsOpen(false)}>X</button>
      </div>
      <div className="Window-Content-Area">
        <h1>Projects</h1>
        <p>Project stuff</p>
      </div>
    </div>
  )
}

function Contact({ setContactIsOpen }) {
  return (
    <div className="Popout-Container Contact">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setContactIsOpen(false)}>X</button>
      </div>
      <div className="Window-Content-Area">
        <h1>Contact</h1>
        <a href="mailto:alexrcini@gmail.com">alexrcini@gmail.com</a>
      </div>
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
      {aboutIsOpen && <AboutMe setAboutIsOpen={setAboutIsOpen}/>}
      {projectsIsOpen && <Projects setProjectsIsOpen={setProjectsIsOpen}/>}
      {contactIsOpen && <Contact setContactIsOpen={setContactIsOpen}/>}
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

