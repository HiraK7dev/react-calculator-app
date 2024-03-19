import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div id='screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/more' element={<Home />} />
        </Routes>
        <div id='footer'>
          <Link to='/'>Home</Link>
          <Link to='/more'>More</Link>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
