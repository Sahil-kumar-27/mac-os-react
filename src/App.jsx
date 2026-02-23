import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/nav'


const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
    </main>
  )
}

export default App

