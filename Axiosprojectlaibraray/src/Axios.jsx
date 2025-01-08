import axios from "axios";
import { useEffect, useState } from "react";

const Axios =()=>{
   let[apidata,setApidata] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>{
             console.log(res.data);
            setApidata(res.data);
        })
        
        
    },[])
    return(
        <>
        <ul>
            {
            apidata.map((e)=>{return <li> {e.email} </li> })
            }
        </ul>
        <table border="">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </thead>
            <tbody>
                {
                    apidata.map((e)=>{return <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.body}</td>
                    </tr>})
                }
            </tbody>
        </table>
        </>
    )
}
export default Axios;