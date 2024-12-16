import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Contact from './Contact'
import Blog from './Blog'
import About from './About'
import Service from './Service'
import Hero from './Hero'
import Layout from './Layout'

function App() {


  return (
    <>
     <Routes>
      
      <Route path="/" element={<Home/>}  />
      
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Conatct' element={<Contact/>}></Route> 
      <Route path='/Blog' element={<Blog/>}></Route> 
      <Route path='/Service' element={<Service/>}></Route> 
      <Route path='/Hero' element={<Hero/>}></Route> 
      </Routes>
      <Layout/>
      
    </>
  )
}

export default App
