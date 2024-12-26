import { useState } from "react";

const Frm2 =()=>{
    let [inputname, setInput]=useState(
        {
            username:" ",
            email:"",
            phone:"",
            address:""
        }
    );
    function hinput(event)
    {
     console.log(event.target.value);
     let{name,value}=event.target;
     setInput(event.target.value);
     setInput({
        ...inputname,
        [name]:value
     });
    };
    let finalsubmit =(event)=>{
        event.preventDefault();
        console.log(inputname);
    }
    return (
        <>
        <form onSubmit={finalsubmit}> 
            <label htmlFor="">Name</label>
            <input type="text" name="username" onChange={hinput} value={inputname.username} /><br/>
             <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={hinput} value={inputname.email} /><br/>
             <label htmlFor="">Phone</label>
            <input type="text" name="phone" onChange={hinput} value={inputname.phone} /><br/>
             <label htmlFor="">address</label>
            <input type="text" name="address" onChange={hinput} value={inputname.address} /><br/>
            <input type="submit" />
        </form>
        </>
    )
}
export default Frm2;