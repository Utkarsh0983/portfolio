import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'
import BlurBlob from './BlurBlob'
import './App.css'

function App() {
 

  return (
    <>
 <Background>
  <BlurBlob position={{top: '6%', left: '20%'}} size={{width: '400px', height: '400px'}} />
 <div className='relative pt-20'>
          <Navbar />
          <About />
          <Skills />
          {/* <Experience /> */}
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
 
      </Background>
    </>
  )
}

export default App
