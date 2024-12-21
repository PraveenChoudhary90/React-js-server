import Child2 from "./Child2";

const Child1 = (Props)=>{
    return(
        <>
        <h1>come from app child1 name:{Props.Name}</h1>
        <h1>come from child1 age:{Props.Age}</h1>
        <Child2  FullName={Props.Name} Ageof={Props.Age} />
        {/* <Child2   /> */}
       
        </>
    )
}
export default Child1;