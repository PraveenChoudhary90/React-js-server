import { useState } from "react";

const From1 =()=>{
    let [h,setH]=useState(" ");
    function hinput(e){
        setH(e.target.value);
        console.log(e.target.value)
    }
    return(
        <>
     <h1>my name{h}</h1>
      <input type="text" onChange={hinput} placeholder="Enter your name" />


        </>
    )
}
export default From1;