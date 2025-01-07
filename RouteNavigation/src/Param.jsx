import { useParams } from "react-router-dom";

const Param =()=>{
     let {course} = useParams();
     console.log(course)
    return(
       
        <>
        <h1>my course is {course}</h1>
        </>
    )
}
export default Param;