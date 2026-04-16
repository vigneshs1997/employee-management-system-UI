import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListEmployeeComponent />
    </>
  )
}

export default App
