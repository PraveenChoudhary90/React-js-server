const Filter = ()=>{
    let arr = ["praveen","22","bhopal","mern"];
    let ar = [1,2,3,4,5,6,7,8,9,10];
    // let newarr = arr.map((e,index)=>{return <li key={index} >{e}</li>})
    let fil = ar.filter((e)=>{return e>3});
    console.log(fil);
    return(
        <>
        {arr.map((e,index)=>{return <h1 key={index} >{e}</h1>})}
        {/* <ul>
            <li>
                {newarr}
            </li>
        </ul> */}
        <ul>
            {
                fil.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        </>
    )
};
export default Filter;