import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Feature from './Components/Feature'
import About from './Components/AboutUs'

function App() {
  return (
    <>
      <div className='bg-green-50'>
        <Navbar />
        <Body />
        <Feature />
        <About />
      </div>

    </>

  )

}

export default App
