import { useState } from "react";

const From =()=>{

    let [h ,setH]=useState(" ");
    let [w,setW] = useState(" ");
    let [value,setvalue] =useState(false)
    function hinput(event){
        console.log(event.target.value);
        setH(event.target.value)
    }
    function winput(event){
        console.log(event.target.value);
        setW(event.target.value);

    }
    return (
        <>
        <h1>my name{h}</h1>
        <h1>my course {w}</h1>
        <h1>{value}</h1>
        <input type="text" onChange={hinput} placeholder="enter your name" />
        <input type="text" onChange={winput} placeholder="enter your course" />
        <button onClick={()=>setvalue(!value)}>submit{(value)?"time is now":"not good "}</button>
        
        </>
    )

}
export default From;