import { udata } from "./App";
const Child2 = ()=>{
    return(
        <>
        <h1>Child2</h1>
        <udata.Consumer>
            {
                (data)=>{
                    return(
                        <h1>Welcome  {data}</h1>
                    )
                }
            }
        </udata.Consumer>
        </>
    )
}
export default Child2;