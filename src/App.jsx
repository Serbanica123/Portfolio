import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/Sections/AboutMe'
import SectionLine from './components/SectionLine'
import Experience from './components/Sections/WorkExperience'
import Contact from './components/Sections/Contact'
import Projects from './components/Sections/Projects'
import Hobbies from './components/Sections/Hobbies'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SectionLine Title="Alexandru Serban" />
      <AboutMe />
      <SectionLine Title="Work Experience" />
      <Experience />
      <SectionLine Title="Personal Projects" />
      <Projects />
      <SectionLine Title="Hobbies" />
      <Hobbies />
      <SectionLine Title="Contact" />
      <Contact />
    </>
  )
}

export default App
