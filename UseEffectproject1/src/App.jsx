import img from "./assets/pic1.jpeg";
import img1 from "./assets/pic2.jpeg";
import img2 from "./assets/pic3.jpeg";
import img3 from "./assets/pic4.jpg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  let [view, setView] = useState(false);
  let [pic, setpic] = useState("red");

  function Datapic(pic) {
    setpic("green");
  }
  function Datapic1(pic) {
    setpic("blue");
  }
  function Datapic2(pic) {
    setpic("black");
  }
  function Datapic3(pic) {
    setpic("red");
  }

  useEffect(() => {
    alert("Callkiya.............!!!!!!!!!!!");
  }, [count, view, pic]);

  return (
    <>
      {count}
      {view}
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        Change
      </button>
      <div style={{ width: "400px", height: "400px", backgroundColor:pic}}></div>
      
        <button  onClick={Datapic}><img src={img} alt="" />pic1</button>
        <button onClick={Datapic1}>pic2</button>
        <button onClick={Datapic2}>pic3</button>
        <button onClick={Datapic3}>pic4</button>

    </>
  );
}

export default App;
