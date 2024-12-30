import { useState } from "react";
import Login from "./Login";


const Local = ()=>{
    let[inputname,setInput]=useState(
        {
            username:"",
            pass:"",
        }
    );
    let[status,setStatus]=useState(false);
    function hinput(event){
        let{name,value}=event.target;
        setInput({
            ...inputname,
            [name]:value

        }
    )
    }
    
    function finalsubmit(event){
        event.preventDefault()
         console.log(inputname);
        if(inputname.username===""||inputname.pass===""){
            alert("all fildes are required");
        }
        else{
        localStorage.setItem("userdata" ,JSON.stringify(inputname));
        setStatus(true);

        }
       
    }
    if(status){
        return <Login/>
    }

    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput} /><br></br>
            <label htmlFor="">password</label>
            <input type="text" name="pass" value={inputname.pass} onChange={hinput} /><br></br>
            <input type="submit" />
        </form>
        <Login/>
        </>
    )
}
export default Local;