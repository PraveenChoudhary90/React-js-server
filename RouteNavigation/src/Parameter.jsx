import { useParams } from "react-router-dom";

const Parameter =()=>{
    let {name,age} =  useParams();
   console.log(name)
    return(
        <>
        <h1>my name is {name} and age is {age}</h1>
        </>
    )
}
export default Parameter;