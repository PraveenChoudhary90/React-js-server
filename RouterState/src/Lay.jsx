import { Link ,Outlet } from "react-router-dom";
const Lay =()=>{
return (
    <>
    <header>Logo</header>
    <nav>
        <ul>
            <li><Link to="/">Count</Link></li>
            <li><Link to="/count1">Count1</Link></li>
        </ul>
    </nav>
    <main><Outlet/></main>
    
    </>
)
}
export default Lay;
