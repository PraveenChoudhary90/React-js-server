
const Show =(props)=>{
   let obj={
        name:"praveenchoudhary",
        age:22
    }

    

return(

    <>

    <h1>{props.obj}</h1>
    <h1>{props.obj}</h1>
    <h1>praveenchoudhary</h1>
    <h1>22</h1>
    
    </>
)
    
//      let [name,age]={
//           name:"praveen",
//           age:22
//    }
//    console.log(name);
//    console.log(age);
//    let [Color ,setColor]=useState("red");
//    function addclr(Color){
//     setColor("red");


//    }
//    function addclr1(Color){
//     setColor("green");
//    }
//    function addclr2(Color){
//     setColor("blue");


//    }
//    function addclr3(Color){
//     setColor("black");


//    }
//     return(
//         <>
//        <div style={{width:"400px",height:"400px",backgroundColor:Color}}>
//        <button onClick={addclr}>red</button>
//        <button onClick={addclr1}>green</button>
//        <button onClick={addclr2}>blue</button>
//        <button onClick={addclr3}>black</button>
//        </div>
//         </>
//     )
}
export default Show;