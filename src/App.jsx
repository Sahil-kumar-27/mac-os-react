import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/nav'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'


const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
    
      <Github />
      <Notes/>
      <Resume/>
    </main>
  )
}

export default App

