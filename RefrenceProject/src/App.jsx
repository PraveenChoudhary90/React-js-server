
import { useRef } from 'react'
import './App.css'
import Home from './Home';

function App() {
 let refl =  useRef("");
 console.log(refl);
 function change(){
  refl.current.innerHTML=  "hello"
  refl.current.style.backgroundColor = "yellow"
 }
 function change1(){
  refl.current.style.backgroundColor="red";
 }
 function change2(){
  refl.current.style.backgroundColor="blue"; }
  

  return (
    <>
     <h1 ref={refl} style={{width:"400px",height:"400px",backgroundColor:"pink"}} onMouseEnter={change1} onMouseLeave={change2} >Code with Cybrom</h1>
     {/* <button onMouseEnter={change1}>Enter</button>
     <button onMouseLeave={change2} >Leave</button> */}
     <button onClick={change}  >Click</button>
     <Home/>
    </>
  )
}
export default App
