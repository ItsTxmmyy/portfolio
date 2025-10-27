import React from 'react'
import './App.css'
import Header from './components/navbar'
import Hero from './components/hero'
import Experience from './components/experience'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

