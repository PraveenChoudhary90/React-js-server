import { createContext } from "react";
import { cdata } from "./App";
import Child3 from "./Child3";
let ddata = createContext();
let data1 = "praveen"
const Child2 = ()=>{
    return(
        <>

        <ddata.Provider value={data1}>
         <Child3/>
        </ddata.Provider>
     
        <cdata.Consumer>
            {
                (data)=>{
                    return(
                        <h1> happy  {data}</h1>
                    )
                }
            }
        </cdata.Consumer>
        
        </>
    )
}
export default Child2;
export {ddata}