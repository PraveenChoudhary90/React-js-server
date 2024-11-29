import { createElement, useState } from 'react'
import './App.css'

function App() {
  // let a = createElement("h1",[],"hello from element");
  //a
  let name = "praveen"
  let obj ={
    fname:"praveen choudhary",
    age:22,
    course:"mern full stack"
  }
  return (
    <div>
      <h1>my name is {name} </h1>
      <h2>{obj.fname}</h2>
      <h3>{obj.age}</h3>
      <h4>{obj.course}</h4>
     
    </div>
  )
}

export default App
