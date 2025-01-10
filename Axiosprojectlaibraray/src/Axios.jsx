import axios from "axios";
import { useEffect, useState } from "react";

const Axios =()=>{
   let[apidata,setApidata] = useState([]);
   let[frminput,setInput]=useState({
    "name":"",
    "age":"",
    "contact":"",
    "city":""
   })
    useEffect(()=>{
        axios.get("http://localhost:3000/student")
        .then(res=>{
             console.log(res.data);
            setApidata(res.data);
        })
        
        
    },[mydel])
    function mydel(id){
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(res=>alert("deleted"));
    }

    function change(e){
        let{name,value}=e.target;
        setInput({
            ...frminput,
            [name]:value,
        })
    }
    function fromsubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/student",frminput)
        .then(res=>alert("data is insert add and create"))
    }
    return(
        <>
        <ul>
            {
            apidata.map((e)=>{return <li> {e.name} </li> })
            }
        </ul>
        <table border="">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {
                    apidata.map((e)=>{return <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>mydel(e.id)}>delete</button></td>
                    </tr>})
                }
            </tbody>
        </table>
        <form action="" onSubmit={fromsubmit}>
            <label htmlFor="">name</label>
            <input type="text" value={frminput.name} name="name"  onChange={change}/><br></br>
             <label htmlFor="">age</label>
            <input type="text" value={frminput.age} name="age"  onChange={change}/><br></br>
             <label htmlFor="">contact</label>
            <input type="text" value={frminput.contact} name="contact"  onChange={change}/><br></br>
             <label htmlFor="">city</label>
            <input type="text" value={frminput.city} name="city"  onChange={change}/><br></br>
             <input type="submit" />
        </form>
        </>
    )
}
export default Axios;