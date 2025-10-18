import { useState } from 'react'
import './App.css'
import Navbar from'./components/Navbar'
import AboutMe from './components/AboutMe'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AboutMe />
    </>
  )
}

export default App
