import { useState } from "react";
import Login from "./Login";


const LocalStorage = ()=>{
    let [input,setInput]=useState(
        {
            username:"",
            email:"",
            number:"",
            password:""
        }
    );
    let [Status, setStatus]=useState(false);
    function pinput(event){
        // console.log(event.target.value);
        // setInput(event.target.value);
        let {name,value}=event.target;
        setInput(
            {
                ...input,
                [name]:value
            }
        )
    }

    function finalsubmit(event){
        event.preventDefault()
         console.log(input);
        if(input.username===""||input.email===""||input.number===""||input.password===""){
            alert("all fildes are required");
        }
        else{
        localStorage.setItem("userdata" ,JSON.stringify(input));
        setStatus(true);

        }
       
    }
    if(Status){
        return <Login/>
    }
    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">name</label>
            <input type="text" name="username" value={input.username} onChange={pinput} /><br></br>
            <label htmlFor="">email</label>
            <input type="text" name="email" value={input.email} onChange={pinput} /><br></br>
            <label htmlFor="">number</label>
            <input type="text" name="number" value={input.number} onChange={pinput} /><br></br>
             <label htmlFor="">password</label>
            <input type="text" name="password" value={input.password} onChange={pinput} /><br></br>
            <input type="submit" />
        </form>
        </>
    )
};
export default LocalStorage;