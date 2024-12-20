import { useState } from "react";

const Layout = ()=>{
    let [count , setcount] = useState(0)
    function add(){
        setcount(count+1);
    }
    function notAdd(){
        if(count > 0){
        setcount(count-1);
    }
    else{
        alert("not okk")
    }
}
    return (
        <>
        <h1>{count}</h1>
       <button onClick={add} >Increment</button>        
       <button onClick={notAdd} >Decrement</button>        
        </>
    )
}
export default Layout;