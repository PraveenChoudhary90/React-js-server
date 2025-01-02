
import { createContext } from 'react'
import './App.css'
import Child1 from './Child1';

let udata = createContext();
let data = "praveen choudhary";

function App() {
 

  return (
    <>
      <udata.Provider value={data}>
        <Child1/>

      </udata.Provider>
    </>
  )
}

export default App;
export {udata}
