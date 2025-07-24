import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button';
import { Link } from './components/ui/Link';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link href="https://vite.dev" target="_blank" underline>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" underline className="ml-4">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR or {' '}
          <Link href="https://react.dev" target="_blank" underline>
            learn React
          </Link>
        </p>
      </div>
      
      {/* Your existing custom component section */}
      <div className="my-8 p-6 border rounded-lg">
        <h2 className="text-xl mb-4">Your Custom Components</h2>
        <div className="flex gap-4">
          <Button variant="default" onClick={() => alert('Primary clicked!')}>
            Primary Action
          </Button>
          <Button variant="outline" onClick={() => alert('Secondary clicked!')}>
            Secondary Action
          </Button>
        </div>
        
        <div className="mt-4">
          <p>Example branded links:</p>
          <div className="flex gap-4 mt-2">
            <Link href="#about" underline>About</Link>
            <Link href="#contact">Contact (no underline)</Link>
          </div>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more or {' '}
        <Link href="https://vitejs.dev" target="_blank">
          visit Vite docs
        </Link>
      </p>
    </>
  )
}

export default App