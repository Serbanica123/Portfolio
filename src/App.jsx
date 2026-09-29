import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

// Scrolls to a section when the link has a #hash (like /#work), otherwise to the top of the page.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
