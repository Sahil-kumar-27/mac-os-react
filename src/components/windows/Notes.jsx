import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./notes.scss";

const Notes = ({ windowName, windowState, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <div>
      <MacWindow
        windowName={windowName}
        windowState={windowState}
        setWindowState={setWindowState}
      >
        <div className="note-window">
          {markdown ? (
            <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
              {markdown}
            </SyntaxHighlighter>
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </MacWindow>
    </div>
  );
};

export default Notes;
