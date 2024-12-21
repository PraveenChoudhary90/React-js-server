import { useState } from "react";

const Count =()=>{
    let[count,setCount]=useState(0)
    function add (){
        setCount(count+5);
    }
    function decres(){
        if(count>0){
            setCount(count-1);
        }
        else{
            window.alert("its not perfrom");
        }
        
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={decres}>Decrement</button>
        
        </>
    )
}
export default Count;