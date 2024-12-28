const MapMethod =()=>{
    let arr = ["praveen","mern","bhopal",9098354728];
    let arrf= arr.map((e,index)=>{return <li key={index}>{e}</li>});
    let arr_obj = [
        {
            id:1,
            name:"praveen",
            age:22,
            location:"bhopal"
        },
        {
            id:2,
            name:"lucky",
            age:26,
            location:"seoni"
        },
        {
            id:3,
            name:"ajju",
            age:25,
            location:"gopalganj"
        },
        {
            id:4,
            name:"chotu",
            age:28,
            location:"katangi"
        }
    ]
    let arr_obj1 = arr_obj.map((e)=>{return<h1 key={e.id}>{e.id}-{e.name}-{e.age}-{e.location}</h1>})
    return(
        <>
        {arr.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
        <ul>
            <li>{arrf}</li>
        </ul>
        {arr_obj1}
        </>
    )
}
export default MapMethod;