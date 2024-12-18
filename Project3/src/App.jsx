
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import App1 from './Layout'
import Content from './Content'

function App() {
  

  return (
    <>
    <Content/>
    <App1/>
    {/* <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
    </Routes> */}

      
      
    </>
  )
}

export default App
