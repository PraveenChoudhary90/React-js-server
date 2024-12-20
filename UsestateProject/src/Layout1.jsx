import { useState } from "react";

const Layout1 =()=>{
    return (
   let [color , setColor]=useState("red");

   function addcolor(color){
    setColor("green");

   }
        <>
        
        <div style={{width:"300px",height:"300px",backgroundColor:color}}>
        <button onClick={addcolor}>Green</button>
        </div>
        </>
    )
}
export default Layout1;