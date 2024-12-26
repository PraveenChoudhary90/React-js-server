import { useState } from "react";

const From = ()=>{
    let [p,setP]=useState(" ");
    let [g,setg]=useState(false);
    function hinput(event){
        console.log(event.target.value);
        setP(event.target.value);
    }
    return (
        <>
        <h1> My name is{p}</h1>
        <input type="text" onChange={hinput} placeholder="Enter your name here" />
        <button onClick={()=>setg(!g)}>Submit{(g)?"time is now":"false"}</button>
        </>
    )
}
export default From;