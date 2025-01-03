import { useContext } from "react";
import { hdata } from "./Child4";

const Child6 =()=>{
    let {course , city}= useContext(hdata);
    return(
        <>
        <h1>my course is {course} and city name is {city}</h1>
        </>
    )
}
export default Child6;