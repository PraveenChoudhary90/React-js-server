import img from "./assets/pic1.jpeg";
import img1 from "./assets/pic2.jpeg";
import img2 from "./assets/pic3.jpeg";
import img3 from "./assets/pic4.jpg";
import { useEffect, useState } from "react";
import "./App.css";
import ImageSelector from "./Use";

function App() {
  let [count, setcount] = useState(0);
  let [view, setView] = useState(false);
  let [pic, setpic] = useState({
    url:img

  });

  function Datapic() {
    setpic({url:img1});
  }
  function Datapic1() {
    setpic({url:img2});
  }
  function Datapic2() {
    setpic({url:img3});
  }
  function Datapic3() {
    setpic({url:img});
  }

  useEffect(() => {
    alert("Callkiya.............!!!!!!!!!!!");
    console.log(pic);
    
  }, [count, view, pic]);

  return (
    <>
      {count}
      {view}
      <button onClick={() => {setcount(count + 1); }}>Increment</button>
      <button onClick={() => { setView(!view);}}> Change </button>
      {/* <img src={img} alt="" /> */}
      <div style={{ width: "400px", height: "400px", backgroundImage:`url(${pic.url})`,backgroundSize:"cover"}}></div>
      
        <button  onClick={Datapic}>pic1</button>
        <button onClick={Datapic1}>pic2</button>
        <button onClick={Datapic2}>pic3</button>
        <button onClick={Datapic3}>pic4</button>
        <ImageSelector/>

    </>
  );
}

export default App;
