// import {Link, Outlet} from "react-router-dom"
// const Layout =()=>{
//     return(
//         <>
//       <header>
//         <nav>
//           <h1>logo</h1>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <Outlet/>
//       </main>
//       <footer>Praveen</footer>



   
//         </>
//     )
// }
// export default Layout;
import { useState } from "react";
const App1 =()=>{
  let [Count , setCounter] = useState(0)
  function add()
  {
    setCounter(Count+1)
  }
   function notadd()
  {
    if(Count >0){
    setCounter(Count-1)
      }
      else{
        alert("not valid")
      }
      }
  return (<>

  <h1>{Count}</h1>
  <button onClick={add}>Increment</button>
  <button onClick={notadd}>Decrement</button>
  
  
  
  
  </>)
}
export default App1;