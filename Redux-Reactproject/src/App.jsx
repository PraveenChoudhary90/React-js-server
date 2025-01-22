
import './App.css'
import {useDispatch , useSelector} from "react-redux"
import { dec, inc } from './Createslice'
function App() {
  let c = useSelector((s)=>s.counter.value)
  let dis = useDispatch()

  return (
    <>
     <h1> {c} </h1>
     <button onClick={()=>dis(inc())} >Increment</button>
     {/* <button onClick={()=>dis(dec())} >Decrement</button> */}
    </>
  )
}

export default App
