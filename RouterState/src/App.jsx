
import './App.css'
import Count from './Count'
import Count1 from './Count1'
import Lay from './Lay'
import Data from './Layout'
import Layout1 from './Layout1'
import App2 from './Layout2'
import True from './Layout3'
import Layout4 from './Layout4'
import {Routes ,Route} from "react-router-dom"
import Show from './Show'

function App() {
  

  return (
    <>
    {/* <True/>
     <Layout1/>
   <Data/>
   <App2/>
   <Layout4/> */}
   <Routes>
    <Route path='/' element={<Lay/>}>
    <Route index element={<Count/>} />
    <Route path='/Count1' element={<Count1/>}/>
    </Route>
   </Routes>
   <Show/>
  
  
    </>
  )
}

export default App
