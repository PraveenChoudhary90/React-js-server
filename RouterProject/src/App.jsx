
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Service from './Service'
import Navbar from './Layout'


function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/service' element={<Service/>} />
      {/* <Route path='/layout' element={<Navbar/>} /> */}


      
     </Routes>

     <Navbar />
    </>
  )
}

export default App
