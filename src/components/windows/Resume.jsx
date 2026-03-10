import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="resume-window">
        <iframe
          src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          frameborder="0"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
