const MAP = ()=>{
    let ar  = ["praveen",89,"bhopal"]
    let arf = ar.map((e,index)=>{return <li key={index}>{e}</li>})
    let arrofobj=[
        {
            "name":"praveen",
            "email":"pc862t34t6@gamil.com",
            "number":9098765765,
            "course":"mern",
            "address":"bhopal"
        }
    ]
    return(
        <>
     {ar.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
     <ul>
        <li>
            {arf}
        </li>
     </ul>
     {/* {arrofobj.map((e,index)=>{return <h1 key={index}>{e}</h1> })} */}
     {arrofobj}
        </>
        
    )
};
export default MAP;