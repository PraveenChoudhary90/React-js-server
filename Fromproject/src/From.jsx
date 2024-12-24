import { useState } from "react";

const From =()=>{

    let [h ,setH]=useState(" ");
    function hinput(event){
        console.log(event.target.value);
        setH(event.target.value)
    }
    return (
        <>
        <h1>my name{h}</h1>
        <input type="text" onChange={hinput} placeholder="enter your name" />
        
        </>
    )
}
export default From;