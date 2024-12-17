import {Link, Outlet} from "react-router-dom"
const Layout =()=>{
    return(
        <>
      <header>
        <nav>
          <h1>logo</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Praveen</footer>
   
        </>
    )
}
export default Layout;