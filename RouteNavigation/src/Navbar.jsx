import {Link, Outlet, useParams} from "react-router-dom"
const Navbar = ()=>{
//    let name =  useParams();
//    console.log(name)
    return(
        <>
        <div>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="parameter">Parameter</Link></li>
                <li><Link to="param">Param</Link></li>
                {/* <li><Link to="contact">Contact</Link></li> */}
            </ul>
        </div>
        <main><Outlet></Outlet></main>
        
        </>
    )
}
export default Navbar;