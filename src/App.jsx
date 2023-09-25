import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Responsive.css'
import AllRoute from './RouteFolder/AllRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoute/>
      <br /><br />
    </>
  )
}

export default App
