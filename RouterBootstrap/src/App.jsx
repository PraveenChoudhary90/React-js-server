
import About from './About'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import Layout from './Layout'
import { Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >  
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}  />
      </Route>
    </Routes>
    </>
  )
}

export default App
