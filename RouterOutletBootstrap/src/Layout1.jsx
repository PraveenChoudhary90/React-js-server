import { useState } from "react";

const Layout1 =()=>{

let [count ,setcount] = useState(0)

 function add()
 {
    setcount(count+1);
 }
 function Decrees()
 {
    if(count>0){
    setcount(count-1);
    }
    else{
        window.alert("Negative number is not Valid")
    }
 }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={Decrees}>Decrement</button>
        </>
    )
}
export default Layout1;