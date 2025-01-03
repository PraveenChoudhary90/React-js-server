import { createContext } from "react";
import { udata } from "./App";
import Child3 from "./Child3";
let newdata =createContext();
let name ="choudhary";
let age = 22;
const Child2 = ()=>{
    return(
        <>
        
        
        <udata.Consumer>
            {
                (data)=>{
                    return(
                        <h1>Welcome  {data}</h1>
                    )
                }
            }
        </udata.Consumer>

        <newdata.Provider value={{name,age}}>
            <Child3/>
        </newdata.Provider>
        
        </>
    )
}
export default Child2;
export {newdata}