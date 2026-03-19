import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">

        <div>
          <h1>Vite + React</h1>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          El contador es {count}
        </button>

      </section>
    </>
  )
}
