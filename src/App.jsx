import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Favourite from './Pages/Favourite'
import VerifyAccount from './Pages/VerifyAccount'
import Home from './Pages/Home'
import Login from './Pages/login'
import Register from './Pages/Register'
import Search from './Pages/Search'
import Dashboard from './Pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/favourites' element={<Favourite/>}/>
        <Route path='/verify' element={<VerifyAccount />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
