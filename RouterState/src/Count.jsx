import { useState } from "react";

const Count =()=>{
    let [count,setcount] =useState(0)
    function add(){
        setcount(count+5);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>Increment</button>
        </>
    )
}
export default Count;