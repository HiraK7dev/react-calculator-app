import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <div id='screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <div id='footer'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
