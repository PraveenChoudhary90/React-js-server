import { useState } from "react";

const From1 = ()=>{
    let [inputname,setInput]=useState({
        username:"",
        email:"",
        phone:"",
        address:""
    });
    function hinput(event){
        console.log(event.target.value);
        const {name,value}=event.target;
        setInput(event.target.value);
        setInput({
            ...inputname,
            [name]:value
        });
    };
    const finalsubmit =(event)=>{
        event.preventDefault();
        console.log(inputname);

    }

    return(
        <>
        <form onSubmit={finalsubmit}>
        <label htmlFor="">Enter the Name</label>
        <input type="text" name="username" placeholder="Enter the name" value={inputname.username} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter the Email</label>
        <input type="text" name="email" placeholder="Enter the email" value={inputname.email} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter the phone</label>
        <input type="text" name="phone" placeholder="Enter the number" value={inputname.phone} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter the Address</label>
        <input type="text" name="address" placeholder="Enter the address" value={inputname.address} onChange={hinput} /><br/><br/>
        <input type="submit" />
        </form>
        </>
    )
};
export default From1;