import { useState } from "react";
const Count1 =()=>{
        let [count,setcount] =useState(0);
          function add(){
            setcount(count+5);
          }
            function notAdd(){
                if(count > 0){
                setcount(count-1)
                }
                else{
                    alert("Not take negetive value")
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
export default Count1;