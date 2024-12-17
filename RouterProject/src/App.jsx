
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Service from './Service'
import Layout from './Layout'
import Layout1 from './Layout1'


function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<Layout1/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/service' element={<Service/>} />
      </Route>
     </Routes>

     
    </>
  )
}

export default App
