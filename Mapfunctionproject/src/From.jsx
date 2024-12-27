import { useState } from "react";

const From =()=>{
    let[inputname,setInput] = useState(
        {
            username:" ",
            email:" ",
            number:" ",
            address:" ",
            course:" ",
        }
    );
    function Pinput(event){
        console.log(event.target.value);
        setInput(event.target.value);
        let {name,value}=event.target;
        setInput({
            ...inputname,
            [name]:value
        });
    };
    const finalsubmit=(event)=>{
        event.preventDefault();
        console.log(inputname);

    }
    return(
        <>
        <form onSubmit={finalsubmit} >
            <label htmlFor="">Enter the Name</label>
            <input type="text" name="username" onChange={Pinput} value={inputname.username} /><br/>
            <label htmlFor="">Enter the Email</label>
            <input type="text" name="email" value={inputname.email} onChange={Pinput} /><br></br>
            <label htmlFor="">Enter the number</label>
            <input type="text" name="number" value={inputname.number} onChange={Pinput} /><br></br>
            <label htmlFor="">Enter the Address</label>
            <input type="text" value={inputname.address} name="address" onChange={Pinput} /><br></br>
            <label htmlFor="">Enter your course </label>
            <input type="text" value={inputname.course} name="course" onChange={Pinput} /><br></br>
            <input type="submit" />
        </form>
        </>
    )
}
export default From;