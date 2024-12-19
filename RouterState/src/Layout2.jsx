import { useState } from "react";

function App2()
{
    let [col, setcol]=useState("yellow")
    function red(){
        setcol("red")
    }
     function red1(){
        setcol("green")
    }
     function red2(){
        setcol("blue")
    }
     function red3(){
        setcol("pink")
    }

return(
    <>
    <div style={{width:"500px",height:"500px", backgroundColor:col}}>

    <button onClick={red} >red</button>
    <button onClick={red1} >green</button>
    <button onClick={red2} >blue</button>
    <button onClick={red3} >pink</button>
    </div>
    </>
)
}
export default App2;