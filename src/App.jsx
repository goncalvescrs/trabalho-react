import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './routes/routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Trabalho grupo 02</h1>
      <Routes/>
    </>
  )
}

export default App
