import {ddata} from "./Child2"
const Child4 =()=>{
    return(
        <>
        <ddata.Consumer>
            {
                (data1)=>{
                    return(
                        <h1>hello {data1}</h1>
                    )
                }
            }
        </ddata.Consumer>
        <h1>hello everyone</h1>
        </>
    )
}
export default Child4;