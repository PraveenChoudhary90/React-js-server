import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const Fet = ()=>{
    let[apidata,setApidata]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then(res=>{
            console.log(res.data);
            setApidata(res.data);
        })
    },[mydel])
    function mydel(id){
        axios.delete(`http://localhost:3000/students/${id}`)
        .then(res=>{deleted});
    }
    return(
        <>
        <ul>
            {apidata.map((e)=>{return <li>{e.name}</li>  })}
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
                <td><button onClick={()=>mydel(e.id)} >Delete</button></td>
            </tr>

              })
           }
           </tbody>
           
 
        </table> 
        </>
    )
}
export default Fet;