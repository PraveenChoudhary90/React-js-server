import { useState } from "react";

const Content =()=>
{
    let [bgcol,setColor]=useState(0)
    function add(){
        backgroundColor="red";
    }
    function add1(){
        backgroundColor="Green";
    }
    function add2(){
        backgroundColor="Blue";
    }
    function add3(){
        backgroundColor="Black";
    }
    return (
        <>
        
       <div style={{width:"300px",height:"300px",backgroundColor:"red"}}></div>

       <button onClick={add}>Red</button>
       <button onClick={add1}>Black</button>
       <button onClick={add2}> Green</button>
       <button onClick={add3}>Blue</button>
        
        </>
    )
}
export default Content;