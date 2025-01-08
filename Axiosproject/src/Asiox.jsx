import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const Asiox = ()=>{
    let[apidata,setApidata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res.data);
            setApidata(res.data);
        })
    },[])
    return(
        <>
        <ul>
            {apidata.map((e)=>{return <li>{e.title}</li>  })}
        </ul>
        <table border="">
            <thead>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </thead>
            <tbody>
           {
            apidata.map((e)=>{return <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
            </tr>

              })
           }
           </tbody>
           
 
        </table> 
        </>
    )
}
export default Asiox;