
import './App.css'
import Count from './Count'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Child1 from './child1'
  let a = window.prompt("enter the name");
  let b = window.prompt("enter the age");

function App() {

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/count'  element={<Count/>}></Route>
    </Route>
    </Routes>
    <Child1 Name={a}  Age={b} />
    {/* <Child1 /> */}

    

    </>
  )
}

export default App
