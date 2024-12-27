import { useState } from "react";

const From = ()=>{
    let[inputname, setInput]=useState({
        username:"",
        email:"",
        phone:"",
        address:"",
        course:""

    });
    function hinput(event){
        const{name,value}=event.target;
        console.log(event.target.value);
        // setInput(event.target.value);
      setInput({
        ...inputname,
        [name]:value,
     });
    };
    let finalsubmit =(event)=>{
        event.preventDefault();
        console.log(inputname);
    }
    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Enter the Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput} /><br/><br/>
             <label htmlFor="">Enter the Email</label>
            <input type="text" name="email" value={inputname.email} onChange={hinput} /><br/><br/>
             <label htmlFor="">Enter the phone</label>
            <input type="text" name="phone" value={inputname.phone} onChange={hinput} /><br/><br/>
             <label htmlFor="">Enter the address</label>
            <input type="text" name="address" value={inputname.address} onChange={hinput} /><br/><br/>
             <label htmlFor="">Enter the course</label>
            <input type="text" name="course" value={inputname.course} onChange={hinput} /><br/><br/>
            <input type="submit" />
        </form>
        </>
    )
}
export default From;