import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const Asiox = ()=>{
    let[apidata,setApidata]=useState([]);
    let[frminp,SetInput]=useState({
        "name":"",
        "age":"",
        "contact":"",
        "city":""
})
const changeinput=(e)=>{
    let{name,value}=e.target;
    SetInput({...frminp,[name]:value})


}

const submitfrom = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/students",frminp)
    .then(res=>alert("Inserted"))
}
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

     // edit data
    let [edata,set_edata]=useState([])
    let [frmdata,set_frmdata]=useState(false)
    let [edit_all_data,set_all_edit_data]=useState({})


    function editinputfrom(e){
      let {name,value}=e.target;
      set_all_edit_data({...edit_all_data,[name]:value})
    }


    function editsubmitfrom(e){
      // e.preventDefault();
      axios.put(`http://localhost:3000/students/${edit_all_data.id}`,edit_all_data)
      .then(res=>alert("your data is updata"))

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
                 <td><button onClick={()=>{set_frmdata(!frmdata),set_all_edit_data(e)}}>Edit</button></td>
            </tr>

              })
           }
           </tbody>
        </table> 
        <form onSubmit={submitfrom}>
            <label htmlFor="">Name</label>
            <input type="text" value={frminp.name} name="name" onChange={changeinput} /><br></br>
             <label htmlFor="">Age</label>
            <input type="text" value={frminp.age} name="age" onChange={changeinput} /><br></br>
             <label htmlFor="">Contact</label>
            <input type="text" value={frminp.contact} name="contact" onChange={changeinput} /><br></br>
             <label htmlFor="">City</label>
            <input type="text" value={frminp.city} name="city" onChange={changeinput} /><br></br>
            <input type="submit" />

        </form>

      {frmdata && (
        <form onSubmit={editsubmitfrom}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter the Name:" value={edit_all_data.name} name="name" onChange={editinputfrom} />
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" placeholder="Enter the Age:"value={edit_all_data.age} name="age" onChange={editinputfrom} />
        <br /><br />
        <label htmlFor="">contact</label>
        <input type="text" placeholder="Enter the contact:" value={edit_all_data.contact} name="contact" onChange={editinputfrom} />
        <br /><br />

        <label htmlFor="">City</label>
        <input type="text" placeholder="Enter the City:" value={edit_all_data.city} name="city" onChange={editinputfrom} />
        <br /><br />
        <button type="submit">submit </button>
      </form>
      )}



        </>
    )
}



     
    
export default Asiox;