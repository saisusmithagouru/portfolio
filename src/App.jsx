import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Skills from "./pages/Skills"
import Portfolio from "./pages/Portfolio"
import Certificate from "./pages/Certificate"

import Navbar from "./Components/Navbar"



function App() {
  return (
    <div>
      <Navbar />
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/resume' element={<Resume/>}/>
  <Route path='/skills' element={<Skills/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/certificate' element={<Certificate/>}/>
</Routes>
    </div>
  )
}

export default App