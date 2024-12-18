import { useState } from "react";
const Data =()=>{
    let [count,setCounter]= useState(0)
     function add()
    {
      setCounter(count+1);
    }
    function notAdd()
    {
        if(count >0){
            setCounter(count-1);
        }
        else{
            alert("negative value is not perfrom");
        }
    }
  
    return(
        <>
         <h1>{count}</h1>
         <button onClick={add}>Increment</button>
         <button onClick={notAdd}>Decrement</button>
        
        </>
    )
}
export default Data;