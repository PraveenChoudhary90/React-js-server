import { cdata } from "./App";

const Child4 =()=>{
    return(
        <>
        <cdata.Consumer>
            {
                (data1)=>{
                    return(
                        <h1>hello {data1}</h1>
                    )
                }
            }
        </cdata.Consumer>
        <h1>hello everyone</h1>
        </>
    )
}
export default Child4;