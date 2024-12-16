import { Link } from "react-router-dom";
const Layout =()=>{
    return(
        <>
        <div className="Box">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/Hero">Hero</Link></li>
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </nav>
            </div>
          
        </>
    )
}
export default Layout;