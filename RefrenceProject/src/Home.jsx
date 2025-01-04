import { useRef } from "react";

const Home =()=>{
   let reft = useRef("");
   function change(){
    console.log(reft);
    reft.current.innerHTML = "mern full stack";
   }
   function change1(){
    reft.current.style.backgroundColor = "red";
   }
   function change2(){
    reft.current.style.backgroundColor = "yellow";
   }
    return(
        <>
        <h1 ref={reft} style={{width:"500px",height:"500px",backgroundColor:"aqua"}} onMouseEnter={change1} onMouseLeave={change2}>praveen choudhary</h1>
        <button onClick={change}>course</button>
        </>
    )
};
export default Home;