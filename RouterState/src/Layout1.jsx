import { useState } from "react";

const Layout1 =()=>{
    const [clr,setClr]=useState("black");
    function add(color)
    {
        setClr(color);
        // console.log(clr)
    }
    return (
        <>
        <div style={{width:"300px",height:"300px",backgroundColor:clr}}></div>
        <button onClick={()=>{add("red")}}>red</button>
        <button onClick={()=>{add("black")}}>black</button>
        <button onClick={()=>{add("green")}}>green</button>
        <button onClick={()=>{add("blue")}}>blue</button>
        </>
    )
}
export default Layout1;