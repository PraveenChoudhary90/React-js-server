import { useState } from "react";

const Layout1 =()=>{
    let [color , setColor]=useState("red");
       function addcolor(color){
    setColor("green");
       }
    return (
   



   
        <>
        
        <div style={{width:"300px",height:"300px",backgroundColor:color}}>
        <button onClick={addcolor}>Green</button>
        </div>
        </>
    )
}
export default Layout1;