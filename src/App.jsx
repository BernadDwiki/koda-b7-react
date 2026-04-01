import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <button
          className="count"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          className="decrement"
          onClick={() => setCount((count) => count - 1)}
        >
          Decreasing Count
        </button>
      </main>
    </>
  )
}

export default App
