
const Event = ()=>{

    function cl(){
        alert("clicked Boss");
    }
    function pk(){
        alert("double click")
    }
    function pk1(){
        alert("ONMouseEnter")
    }
      function pk2(){
        alert("ONMouseLeave")
    }
      function pk3(){
        alert("ONMouseDown")
    }
      function pk4(){
        alert("ONMousemove")
    }
      function pk5(){
        alert("ONMouseout")
    }
    
    return(
        <>
        <button onClick={cl} >Click Here</button>
        <button onDoubleClick={pk} >Double Click</button>
        <button onMouseEnter={pk1} >click mouse Enter</button>
        <button onMouseLeave={pk2} >Click mouse leave </button>
        <button onMouseDown={pk3} >Click mouse Down</button>
        <button onMouseMove={pk4} >click mouse Move</button>
        <button onMouseOut={pk5} >click mouse Out</button>
        <button onClick={()=>alert("inline event")} >Inline Event</button>
       
        
        </>
    )
}

export default Event;