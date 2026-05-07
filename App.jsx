import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
