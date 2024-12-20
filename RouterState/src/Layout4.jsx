import { useState } from "react";

const Layout4 =()=>{

     let [show, setshow] =useState(false);
    return (
        <>
        
        <button onClick={()=>setshow(!show)} >Click here</button>
        <button onClick={()=>setshow(true)} >Click here</button>
        <button onClick={()=>setshow(false)} >Click hide</button>
        <button onClick={()=>setshow(!show)} >
            {(show)?"hide":"display"}
        </button>
        {(show)? <h2>Suceess</h2> : " "}
        </>
    )
}
export default Layout4;