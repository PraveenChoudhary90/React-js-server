import { useEffect, useState } from "react";
import axios from "axios";
const Axios = ()=>{
    let [jsondata,setdata] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/Students")
        .then(res=>{
            console.log(res.data);
            setdata(res.data);
        })
    },[mydel])


  function mydel(id){
        axios.delete(`http://localhost:3000/Students/${id}`)
        .then(res=>{deleted});
    }

    
   
    return(
        <>
        <ul>
            {
                jsondata.map((e)=>{return <li>{e.name}</li>})
            }
        </ul>
        <table border="">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CONTACT</th>
                <th>CITY</th>
                <th>DELETE</th>
            </thead>
            <tbody>
                {
                    jsondata.map((e)=>{ return <tr>
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
export default Axios;