import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
           <header>
                <nav>
                    <h1>Logo</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/service">Service</Link></li>
                    </ul>
                </nav>
                </header>

                <main>
                    <Outlet/>
                </main>

                <footer style={{display:"flex",gap:"50px",justifyContent:"center",alignContent:"center",backgroundColor:"grey"}}>
                    <div className="content">
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                       
                    </div>
                    <div className="content1">
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        
                    </div>
                    <div className="content2">
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        
                    </div>
                     <div className="content">
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                       
                    </div>
                    <div className="content1">
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        <h1>9098354728</h1>
                        
                    </div>
                    <div className="content2">
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        <h1>praveen@gmail.com</h1>
                        
                    </div>
                </footer>
        
        </>
    )
}
export default Layout;