
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count ,setcount] =useState(0)
  let [count1 ,setcount1] =useState(false)
  let [color,setcolor] =useState("red")
  useEffect(()=>{alert("Call.........!!!!!!!!!!")},[count ,count1,color])
  function Clr(color){
    setcolor("red");

  }
  function Clr1(color){
    setcolor("Green");

  }
  function Clr2(color){
    setcolor("blue");

  }
  function Clr3(color){
    setcolor("black");

  }

  return (
    <>
     {count}
     <button onClick={()=>setcount(count+1)} >increment</button>
     <button onClick={()=>setcount1(!count1)} >change</button>
     <div style={{width:"400px",height:"400px",backgroundColor:color}}></div>
      <button onClick={Clr}>red</button>
      <button onClick={Clr1}>green</button>
      <button onClick={Clr2}>blue</button>
      <button onClick={Clr3}>black</button>
     
    </>
  )
}

export default App
