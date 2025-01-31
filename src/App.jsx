import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/About/About'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default App