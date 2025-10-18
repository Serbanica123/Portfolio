import { useState } from 'react'
import './App.css'
import Navbar from'./components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <h1>Portfolio Alexandru Serban Nicolae</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
    // <>
    //   <h1>Portfolio Alexandru Serban Nicolae</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //   </div>
    //   <div><a className="resume" href={pdf} target="_blank">Download Resume</a></div>
    // </>
  )
}

export default App
