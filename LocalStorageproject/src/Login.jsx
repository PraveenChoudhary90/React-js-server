import { useState, useEffect } from "react";

const Login = ()=>{
    let [input,setInput]=useState(
        {
            username:"",
            password:"",
        }
    );

    let [udata,setUdata]=useState(null);

    function hinput(event){

        // console.log(event.target.value);
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
       
        
       
    }
   useEffect(()=>{
        let logindata= JSON.parse(localStorage.getItem("userdata"));
        setUdata(logindata)
   },[])
    return(
        <>
        <h1>login page</h1>
       <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={input.username} onChange={hinput} /><br></br>
      
         <label htmlFor="">password</label>
        <input type="text" name="password" value={input.password} onChange={hinput} /><br></br>
        <input type="submit" />
       </form>
        </>
    )
}
export default Login;