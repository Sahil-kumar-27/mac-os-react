import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    spotify: false,
    cli: false,
    notes: false,
    resume: false,
  });
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github
          windowName="github"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.notes && (
        <Notes
          windowName="notes"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
    </main>
  );
};

export default App;
