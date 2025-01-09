import axios from "axios";
import { useEffect, useState } from "react";

const Fet = ()=>{
    let [jsondata,setjsondata]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/student")
        .then(res=>{
              console.log(res.data);
              setjsondata(res.data);
        })
      
    },[])
    return(
        <>
        <table border="">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CONTACT</th>
                <th>CITY</th>
            </thead>
            <thead>
                {
                    jsondata.map((e)=>{
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                        </tr>
                    })
                }
            </thead>
        </table>
        
        
        </>
    )
}
export default Fet;