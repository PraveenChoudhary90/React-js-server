import { useState } from "react"

const True = ()=>{
  let[h,setH] = useState(false)

  let p =" "
  
    if(h){
        p = <h1>Time is now</h1>
    }
    else{
        p=" "
    }
  
    return (
        <>
        <button onClick={()=>setH(!h)} >Show</button>
        <button onClick={()=>setH(false)} >Hide</button>
        {p}
        
        </>
    )
}
export default True;