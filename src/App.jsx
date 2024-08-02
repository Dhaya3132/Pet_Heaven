import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  return (
    <>
      <div className='bg-green-50'>
        <Navbar />
        <Body />
      </div>

    </>

  )

}

export default App
