import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/student.jsx'
import Students from './components/array.jsx'
import "./styles.css";

function App() {
 const [student, setStudent] = useState([]);
  return (
    <>
  <Student />
  <Students />
 </>
  )
}

export default App
