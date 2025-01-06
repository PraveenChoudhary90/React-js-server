import {useNavigate} from "react-router-dom"
const About = ()=>{
    let nav = useNavigate()
    function contactpage(){
        nav("/contact")
    }
    return(

        <>
        <h1>About page</h1>
        <button onClick={contactpage}>contact us</button>
        </>
    )
}
export default About;