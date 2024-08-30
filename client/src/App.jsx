import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Sigin'
import Signup from './pages/Signup'
import Header from './compnents/Header'
import Privateroute from './compnents/Privateroute'



function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
  
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route
          path="/profile"
          element={
            <Privateroute>
              <Profile />
            </Privateroute>
          }
        />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
