import { useState } from "react";

const Layout2 =() =>{

  let [color , setcolor]=useState("red")
   function add(color)
   {
    setcolor("green");
   }
    function add1(color)
   {
    setcolor("red");
   }
    function add2(color)
   {
    setcolor("pink");
   }
    function add3(color)
   {
    setcolor("grey");
   }
    function add4(color)
   {
    setcolor("black");
   }
    function add5(color)
   {
    setcolor("yellow");
   }
    return (
        <>
        <div style={{width:"100wh",height:"100vh", backgroundColor:color}}>
        <button onClick={add}>green</button>
        <button onClick={add1}>red</button>
        <button onClick={add2}>pink</button>
        <button onClick={add3}>grey</button>
        <button onClick={add4}>black</button>
        <button onClick={add5}>yellow</button>
       
       
        </div>
        </>
    )
}
export default Layout2;