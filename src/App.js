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
          imgName='aboutme.png'
          caption='About Me'
        />
      </button>
      <div className="break"></div> 
      <button onClick={() => setContactIsOpen(true) } className="Icon-Button">
        <Icon 
          imgName='contact-card.png'
          caption='Contact'
        />
      </button>
      <div className="break"></div> 
      <button onClick={() => setProjectsIsOpen(true) } className="Icon-Button">
        <Icon 
          imgName='projects.png'
          caption='Projects'
        />
      </button>
    </div>
  )
}

function AboutMe({ setAboutIsOpen }) {
  return (
    <div className="Popout-Container About-Me">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setAboutIsOpen(false)}>⨉</button>
      </div>
      <div className="Window-Content-Area">
        <h1>About Me</h1>
        <div className="Window-Content-Area-Flow Window-Content-Area-Main">
          <img className="About-Me-Image" src="me.png"/>
            <p>Hi world!
                <br />
                Thanks for stopping by my landing site. <b>My name's Alex</b>, and I'm a young, driven software developer with a passion for computing. 
                Currently, I develop embedded systems
                for marine and automotive products.
                <br />
                <br />
                <b><u>Fast Facts:</u></b>
                <br />
                <ul>
                  <li><u>Graduated:</u> May 2023, Penn State University</li>
                  <br />
                  <li><u>Location:</u> Wilmington, NC - USA</li>
                  <br />
                  <li><u>Current position:</u> Software Engineer @ Sturdy Corporation</li>
                  <br />
                  <li><u>Degree:</u> B.S. Computer Engineering</li>
                  <br />
                  <li>I can speak and understand Mandarin Chinese!</li>
                </ul>
              </p>
        </div>
      </div>
    </div>
  )
}

function Projects({ setProjectsIsOpen }) {
  return (
    <div className="Popout-Container Projects">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setProjectsIsOpen(false)}>⨉</button>
      </div>
      <div className="Window-Content-Area">
        <h1>Projects</h1>
        <div className="Window-Content-Area-Main">
          <p>Please visit my Github and LinkedIn profiles, accessible below on the taskbar.</p>
        </div>
      </div>
    </div>
  )
}

function Contact({ setContactIsOpen }) {
  return (
    <div className="Popout-Container Contact">
      <div className="Window-Title-Bar">
        <button className="Window-Close-Button" onClick={() => setContactIsOpen(false)}>⨉</button>
      </div>
      <div className="Window-Content-Area">
        <h1>Contact</h1>
        <div className="Window-Content-Area-Main">
          <h2 style={{fontFamily: 'sans-serif'}}>Alex Cini</h2>
          <h3 style={{fontFamily: 'sans-serif'}}>Email: <a href="mailto:alexrcini@gmail.com">alexrcini@gmail.com</a></h3>
          <h3 style={{fontFamily: 'sans-serif'}}>Cell: <a href="tel:+13367057799">(336) 705-7799</a></h3>
        </div>
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

function BottomBarMinimized({ linkURL, imageSource, textContent, quickbarHeight }) {
  return (
    <a className="No-Style-a" href={linkURL} target="_blank" rel="noopener noreferrer">
    <div className="Bottom-Bar-Minimized-Wrapper">
      <div className="Bottom-Bar-Minimized">
        <img src={imageSource} height={quickbarHeight} />
        <p>{textContent}</p>
      </div>
    </div>
  </a>
  )
}

function BottomBar({ changeBackground }) {
  const quickbarHeight = 28;

  return (
    <div className="Bottom-Bar-Border-Wrapper">
      <div className="Bottom-Bar">
        <div className="Bottom-Bar-Left">
          <button onClick={changeBackground}>
            <div className="Start-Button-Wrapper">
              <img className="Start-Button" src="win98_start.png" height={30} />
            </div>
          </button>
          <p className="Bottom-Bar-Pipe"></p>
          <div className="Bottom-Bar-Seperator-Wrapper">
            <p className="Bottom-Bar-Seperator"></p>
          </div>
          <img className="Bottom-Bar-Icon" src="c.svg" height={quickbarHeight + 1} />
          <img className="Bottom-Bar-Icon" src="cpp.svg" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="c-sharp.svg" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="python.svg" height={quickbarHeight - 1} />
          <img className="Bottom-Bar-Icon" src="java.svg" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="html5.svg" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="css.svg" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="javascript-js.svg" height={quickbarHeight - 1} />
          <img className="Bottom-Bar-Icon React-Img" src="react.png" height={quickbarHeight} />
          <img className="Bottom-Bar-Icon" src="git.svg" height={quickbarHeight - 1} />
          <p className="Bottom-Bar-Pipe"></p>
          <div className="Bottom-Bar-Seperator-Wrapper">
            <p className="Bottom-Bar-Seperator"></p>
          </div>
          <BottomBarMinimized 
            linkURL='https://github.com/arcini'
            imageSource='github.svg'
            textContent='My Github'
            quickbarHeight={quickbarHeight}/>
          <BottomBarMinimized 
            linkURL='https://www.linkedin.com/in/alex-c-68b1a6137/'
            imageSource='linkedin.svg'
            textContent='My LinkedIn'
            quickbarHeight={quickbarHeight}/>
        </div>


      
        <div className="Bottom-Bar-Right">
          <p className="Bottom-Bar-Pipe"></p>
          <div className="Clock-Wrapper">
            <ClockDiv />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [backgroundClassName, setBackgroundClassName] = useState("Background-1");

  const changeBackground = () => {
    switch (backgroundClassName) {
      case 'Background-1':
        setBackgroundClassName("Background-2");
        break;
      case 'Background-2':
        setBackgroundClassName("Background-3");
        break;
      case 'Background-3':
        setBackgroundClassName("Background-4");
        break;
      case 'Background-4':
        setBackgroundClassName("Background-5");
        break;
      case 'Background-5':
        setBackgroundClassName("Background-6");
        break;
      case 'Background-6':
        setBackgroundClassName("Background-7");
        break;
      case 'Background-7':
        setBackgroundClassName("Background-8");
        break;
      case 'Background-8':
        setBackgroundClassName("Background-9");
        break;
      case 'Background-9':
        setBackgroundClassName("Background-10");
        break;
      case 'Background-10':
        setBackgroundClassName("Background-1");
        break;
    }
  };
  
  return (
    <div className={backgroundClassName}>
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
      <BottomBar
        changeBackground={changeBackground} />
    </div>
  )
}

export default App;

