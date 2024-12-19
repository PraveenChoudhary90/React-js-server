
import './App.css'
import {Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Layout1 from './Layout1'
import Layout2 from './Layout2'
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Navbar/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      </Route>
     </Routes>
     <Layout1/>
     <Layout2/>
    </>
  )
}

export default App
