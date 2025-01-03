
import { createContext } from 'react'
import './App.css'
import Child1 from './Child1';
let newdata = createContext();
let name = "praveen choudhary";
let course = "mern full stack developer";
let city = "bhopal";

function App() {
  

  return (
    <>
     <newdata.Provider value={{name,course,city}}>
      <Child1/>
     </newdata.Provider>
    </>
  )
}

export default App;
export {newdata};
