import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, windowState, setWindowState }) => {
  const commands = {
    help: {
      description: "Show all commands",
      fn: () => `
Available Commands

about       -> About me
skills      -> Technical skills
projects    -> My projects
experience  -> Work experience
contact     -> Contact info
github      -> Open my GitHub
linkedin    -> Open LinkedIn
resume      -> View my resume
joke        -> Random developer joke
matrix      -> Enter the matrix
whoami      -> Current user
date        -> Current date
clear       -> Clear terminal
`,
    },

    about: {
      description: "Learn more about me",
      fn: () => `
Hi, I'm Sahil Kumar

Electrical Engineer
Frontend Developer

I enjoy building interactive web experiences using React,
JavaScript and modern UI technologies.

Currently exploring creative frontend and portfolio projects.
`,
    },

    skills: {
      description: "View technical skills",
      fn: () => `
Frontend
React.js
JavaScript
HTML / CSS
Tailwind CSS

Tools
Git
Vite
VS Code
`,
    },

    projects: {
      description: "List my projects",
      fn: () => `
Projects

1. Reels / Shorts UI Web App
   Social media style UI with like, share and comment.

2. Engineering Portfolio
   Interactive portfolio with terminal interface.

3. Aggarwal Store Excel Dashboard
   Data visualization dashboard for sales analytics.
`,
    },

    experience: {
      description: "Work experience",
      fn: () => `
Data Analyst Intern
Shakuntalam Timbers
May 2024 – July 2024

• Analyzed timber sales data
• Built visualizations for purchasing trends
• Identified top selling products
`,
    },

    contact: {
      description: "Contact information",
      fn: () => `
Email: sahilkumarrrr27@gmail.com
Location: Delhi, India
`,
    },

    github: {
      description: "Open GitHub",
      fn: () => {
        window.open("https://github.com/Sahil-kumar-27", "_blank");
        return "Opening GitHub profile...";
      },
    },

    linkedin: {
      description: "Open LinkedIn",
      fn: () => {
        window.open("https://linkedin.com/", "_blank");
        return "Opening LinkedIn...";
      },
    },

    resume: {
      description: "Open resume",
      fn: () => {
        window.open("/Resume.pdf", "_blank");
        return "Opening resume...";
      },
    },

    joke: {
      description: "Developer joke",
      fn: () => `
Why do programmers prefer dark mode?

Because light attracts bugs.
`,
    },

    matrix: {
      description: "Enter the matrix",
      fn: () => `
010101010101010101010101010101
101010101010101010101010101010
010101010101010101010101010101

You are inside the matrix...
`,
    },

    whoami: {
      description: "Current user",
      fn: () => "sahil",
    },

    date: {
      description: "Show date",
      fn: () => new Date().toString(),
    },
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          noDefaults={true}
          welcomeMessage={`
███████╗ █████╗ ██╗  ██╗██╗██╗     
██╔════╝██╔══██╗██║  ██║██║██║     
███████╗███████║███████║██║██║     
╚════██║██╔══██║██╔══██║██║██║     
███████║██║  ██║██║  ██║██║███████╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝

Welcome to Sahil Kumar's Developer Terminal

Type "help" to view commands
`}
          promptLabel={"sahilkumar:~$"}
          promptLabelStyle={{ color: "#00ff9c" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
