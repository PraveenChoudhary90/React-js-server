import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <div className="container">
            <div className="row">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/service">Service</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}
export default Navbar;