import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Sigin from './pages/Sigin'
import Signup from './pages/Signup'
import Header from './compnents/Header'



function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/signin' element={<Sigin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
