import { useContext } from "react";
import { newdata } from "./App";

const Child2 = ()=>{
    let{name,course,city}=useContext(newdata);
    return(
        <>
        <h1>my name is {name}</h1>
        <h1>my course is {course}</h1>
        <h1>my city name is {city}</h1>
        </>
    )
}
export default Child2;