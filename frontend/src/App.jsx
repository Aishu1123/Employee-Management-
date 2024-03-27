import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import AllRoutes from './Router/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AllRoutes />
    </>
  )
}

export default App
