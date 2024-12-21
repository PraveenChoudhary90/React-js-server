import { Link, Outlet } from "react-router-dom";
const Layout =()=>{
    return(
        <>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Count">Count</Link></li>
            </ul>
        </nav>
        <main> <Outlet/> </main>
        </>
    )
}
export default Layout;