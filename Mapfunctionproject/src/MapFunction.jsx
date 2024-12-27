const MapMethod =()=>{
    let arr = ["praveen","mern","bhopal",9098354728];
    let arrf= arr.map((e,index)=>{return <li key={index}>{e}</li>})
    return(
        <>
        {arr.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
        <ul>
            <li>{arrf}</li>
        </ul>
        </>
    )
}
export default MapMethod;