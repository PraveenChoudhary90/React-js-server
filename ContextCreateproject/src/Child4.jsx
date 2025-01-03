import { createContext, useContext } from "react";
import { newdata } from "./Child2";
import Child5 from "./Child5";

let hdata = createContext();
let course = "mern full stack";
let city = "bhopal";

const Child4 = ()=>{
   let {name , age} = useContext(newdata);
    return(
        <>
        {/* <newdata.Consumer>
            {
                ({name,age})=>{
                    return(
                        <div>my surname is {name} and my age is {age}</div>
                    )
                }
            }
        </newdata.Consumer> */}
        <h3>my surname is {name} and my age is {age}</h3>

        <hdata.Provider value={{course,city}}>
            <Child5/>
        </hdata.Provider>
        </>
    )
}
export default Child4;
export {hdata}